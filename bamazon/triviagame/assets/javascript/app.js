//Player will be given a total of 30 seconds to answer 
//Objective of the game is to see how much the player knows about their state's musical history.
//There are a total of seven questions with an added bonus question.
//Bonus question valued at 10-points to boost the final score if guessed correctly.

//Set function to allow 30 second timer for game

// function run() {
//   if (!intervalId) {
//   intervalId = setInterval(decrement, 1000);
//   }
//   }
// function stop() {
// 	clearInterval(intervalId);
// 	intervalId = null
  
//Set timer to spinner allowing player visual real-time of count down.
$(document).ready(function() {

  $("#start").on("click", function () {
    alert("START");
  })
  
  
  //Set four arrays for game
      
  var birthCity = ["Beaufort", "Hamlet", "Durham", "Tryon", "Littleton", "Newland", "Rocky Mount", "Kannapolis"];
  var playInstrument = ["Drum", "Saxophone", "Flute", "Piano", "Clarinet", "Trumpet", "Bass", "Piano"];
  var bonusQuestion = ["Singer", "Band Leader", "Composer", "Civil Rights Activist"];

  //Design code for multiple choice ccorrect incorrect questions

  var correctAnswer = 0 
  var incorrect = 0
  // if $('input["radio"][""]:checked' ==  "correct" {
  //  correctAnswer++;
  //   }
  //   else {
  //     incorrect++;

 var rad3 = $("input[type ='radio']").eq(2);
 rad3.prop("checked" , true);
 console.log(rad3);

});

  //   }

  //For function to find city John Coltrane born for function
  
  var question = [{
      "question": "In what city was John Coltrane born?",
      "answerArray": ["Beaufort", "Hamlet"],
      "corrAnswer": 1
      },
      {//For function to find city Nina S born for function
        "question": "In what city was Nina Simone born?",
        "answerArray": ["Durham", "Tryon"],
        "corrAnswer": 1
      },
      {//For function to find city Max R born for function
        "question": "In what city was Max Roach born?",
        "answerArray": ["Littleton", "Newland"],
        "corrAnswer": 1
      },
      {//For function to find city Thelonious M born for function
        "question": "In what city was Thelonious Monk born?",
        "answerArray": ["Rocky Mount, Kannapolis"],
        "corrAnswer": 0
      },
      {
        "question": "What instrument is John Coltrane well known for?",
        "answerArray": ["Drum", "Saxophone", "Flute", "Piano"],
        "corrAnswer": 1
      },
      {//For function to instrument Nina and Monk
        "question": "Which instrument was Nina Simone and Thelonious Monk well known for?",
        "answerArray": ["Clarinet", "Trumpet", "Bass", "Piano"],
        "corrAnswer": 3
      },
      {
        "question": "Pick one category that all these musicians have in common.",
        "answerArray": ["Singer", "Band Leader", "Composer", "Civil Rights Activist"],
        "corrAnswer": 2
      }];
    
  
  function johnColtrane() {
    var birthCity = document.querySelector("born");
    var len = birthCity.length;
    var checked = false;
    var userAnswer;
    
    for(var i= 0; i < len; i++) {
        if(birthCity[i].checked) {
          checked = true;
          userAnswer = birthCity[i].value;
        }
    } 
    // if user click submit button without selecting any option, alert box should be say "please select choice answer".
    if(!checked) {
      alert("please select one answer");
      return;
    }
    // Correct answer
    if(userAnswer === "Hamlet") {
        alert("Answer is correct!");
    }
    // incorrect answer
    else {
        alert("Answer is wrong!");
    }
  }
  
  
  function ninaSimone() {
    var birthCity = document.querySelector("question2");
    var i = 0, len = birthCity.length;
    var checked = false;
    var userAnswer;
    
    for(var i= 0; i < len; i++) {
        if(birthCity[i].checked) {
          checked = true;
          userAnswer = birthCity[i].value;
        }
    } 
    // if user click submit button without selecting any option, alert box should be say "please select choice answer".
    if(!checked) {
      alert("please select one answer");
      return;
    }
    // Correct answer
    if(userAnswer === "Tryon") {
        alert("Answer is correct!");
    }
    // incorrect answer
    else {
        alert("Answer is wrong!");
    }
  }
  
  function maxRoach() {
    var birthCity = document.querySelector("question3");
    var i = 0, len = birthCity.length;
    var checked = false;
    var userAnswer;
    
    for(var i= 0; i < len; i++) {
        if(birthCity[i].checked) {
          checked = true;
          userAnswer = birthCity[i].value;
        }
    } 
    // if user click submit button without selecting any option, alert box should be say "please select choice answer".
    if(!checked) {
      alert("please select one answer");
      return;
    }
    // Correct answer
    if(userAnswer === "Newland") {
        alert("Answer is correct!");
    }
    // incorrect answer
    else {
        alert("Answer is wrong!");
    }
  }
  
  function theMonk() {
    var birthCity = document.querySelector("question4");
    var i = 0, len = birthCity.length;
    var checked = false;
    var userAnswer;
    
    for(var i= 0; i < len; i++) {
        if(birthCity[i].checked) {
          checked = true;
          userAnswer = birthCity[i].value;
        }
    } 
    // if user click submit button without selecting any option, alert box should be say "please select choice answer".
    if(!checked) {
      alert("please select one answer");
      return;
    }
    // Correct answer
    if(userAnswer === "Rocky Mount") {
        alert("Answer is correct!");
    }
    // incorrect answer
    else {
        alert("Answer is wrong!");
    }
  }
  function johnColtrane() {
    var playInstrument = document.querySelector("question5");
    var i = 0, len = playInstrument.length;
    var checked = false;
    var userAnswer;
    
    for(var i= 0; i < len; i++) {
        if(playInstrument[i].checked) {
          checked = true;
          userAnswer = playInstrument[i].value;
        }
    } 
    // if user click submit button without selecting any option, alert box should be say "please select choice answer".
    if(!checked) {
      alert("please select one answer");
      return;
    }
    // Correct answer
    if(userAnswer === "Saxophone") {
        alert("Answer is correct!");
    }
    // incorrect answer
    else {
        alert("Answer is wrong!");
    }
  }
  function ninaThe() {
    var playInstrument = document.querySelector("question6");
    var i = 0, len = playInstrument.length;
    var checked = false;
    var userAnswer;
    
    for(var i= 0; i < len; i++) {
        if(playInstrument[i].checked) {
          checked = true;
          userAnswer = playInstrument[i].value;
        }
    } 
    // if user click submit button without selecting any option, alert box should be say "please select choice answer".
    if(!checked) {
      alert("please select one answer");
      return;
    }
    // Correct answer
    if(userAnswer === "Piano") {
        alert("Answer is correct!");
    }
    // incorrect answer
    else {
        alert("Answer is wrong!");
    }
  }
  
  function bonus() {
    var bonusQuestion = document.querySelector("question7");
    var i = 0, len = bonusQuestion.length;
    var checked = false;
    var userAnswer;
    
    for(var i= 0; i < len; i++) {
        if(bonusQuestion[i].checked) {
          checked = true;
          userAnswer = bonusQuestion[i].value;
        }
    } 
    // if user click submit button without selecting any option, alert box should be say "please select choice answer".
    if(!checked) {
      alert("please select one answer");
      return;
    }
    // Correct answer
    if(userAnswer === "Composer") {
        alert("Answer is correct!");
    }
    // incorrect answer
    else {
        alert("Answer is wrong!");
    }
  }
  
   







//     //For expression allowing 
//     var  bonusQues = "";
//     for (var i = 0; i < 9; i++) {
//     bonusQues = bonusQues + i;
//     console.log(bonusQues);
//     }
// //  
// }

//     
// $("#start-button").on("click", function(){
//   startGame(start);
// });
// }



// var timer = 0;
//   var correctAnswer = "";
//   var incorrectAnswer = [];
//   var userAnswer = [];
  

// if(secs> 5){
//     clearInterval(id);
//     alert('Total Time: ' + secs + ' seconds');
//   }







//     // Slideshow Activity
// // Students: follow the instructions below:

// /*// TODO: Put links to our images in this image array.
// var images = ['images/bootstrap.png', 'images/github-logo.jpg', 'images/logo_Javascript.png'];

// // Variable showImage will hold the setInterval when we start the slideshow
// var showImage;
// // Count will keep track of the index of the currently displaying picture.
// var count = 0;

// // TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
// $('#start').on('click', startSlideshow);


// // TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
// $('#stop').on('click', stopSlideshow);

// // This function will replace display whatever image it's given
// // in the 'src' attribute of the img tag.
// function displayImage() {
//   $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
// }

// function nextImage() {

//   // TODO: Increment the count by 1.
//   count++;


//   // TODO: Show the loading gif in the "image-holder" div.
// $('#image-holder').html(`<img src="images/loading.gif">`);

//   // TODO: Use a setTimeout to run displayImage after 1 second.
// // Always use a varible to settimeout or setinterval
// let setTimer = setTimeout(displayImage, 1000);;

//   // TODO: If the count is the same as the length of the image array, reset the count to 0.
// if (count === images.length){
//   count = 0;
// }
// }
// function startSlideshow() {

//   // TODO: Use showImage to hold the setInterval to run nextImage.
//   showImage = setInterval(nextImage, 4000);

// }
// function stopSlideshow() {

//   // TODO: Put our clearInterval here:
//   clearInterval(showImage);

// }

// // This will run the display image function as soon as the page loads.
// displayImage();
// */
