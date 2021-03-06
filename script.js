/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
var clueHoldTime = 1200;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

var pattern = [4, 5, 6, 6, 1, 2, 4, 1, 3, 3];
var progress = 0;
var gamePlaying = false;
var volume = 0.5;
var tonePlaying = false;
var guessCounter = 0;
var strikes = 0;
var time = 20;
var cdown = null;
var reset = false;

function startGame(){
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1500;
  strikes = 3;
  document.getElementById("lives").innerHTML = "Strikes: " + strikes;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  //generate new pattern
  for (let i = 0; i < 10; i++) {
    pattern[i] = Math.ceil(Math.random() * 6);
    console.log(pattern[i]);
  }
  
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  reset = true;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6, //C
  2: 293.66, //D
  3: 329.63, //E
  4: 349.23, //F
  5: 392, //G
  6: 440 //A
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
    document.getElementById("pic"+btn).classList.remove("hidden")
  }
}
function stopTone(btn){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
  document.getElementById("pic"+btn).classList.add("hidden")
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
  document.getElementById("pic"+btn).classList.remove("hidden")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
  document.getElementById("pic"+btn).classList.add("hidden")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i])
    delay += clueHoldTime
    delay += cluePauseTime;
  }
  clueHoldTime -= 100;
  time = 20;
  reset = false;
  
  clearInterval(cdown);
  cdown = setInterval(countdown, 1000);
}

function countdown() {
  document.getElementById("time").innerHTML = "Counting down: " + time;
  time--;
  if (reset || time < 0) {
    if (!reset) {
      loseGame();
    }
    document.getElementById("time").innerHTML = "Counting down: 0";
    time = 20;
    clearInterval(cdown);
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  
  if (!gamePlaying) {
    return;
  }
  
  if (pattern[guessCounter] == btn){
    if (guessCounter == progress){
      if (progress == pattern.length - 1){
        winGame();
      } else{
        progress++;
        playClueSequence();
      }
    } else{
      guessCounter++;
    }
  } else{
    strikes --;
    document.getElementById("lives").innerHTML = "Strikes: " + strikes;
    if (strikes == 0) {
      document.getElementById("lives").innerHTML = "Strikes: " + strikes;
      loseGame();
    } else {
      alert("You have " + strikes + " strikes left");
      playClueSequence();
    }
  }
}

