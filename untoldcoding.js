const text =
  "Dear Denisse I hope you get this Letter, Honestly I don't know how I'm gonna approach you and talk to you because I don't know if I'm just bothering you, because I feel like I am, well that's what in my mind so I don't know if it's true anyways I just wanna say i've liked you for sometime now and I like how you smile with those beautiful eyes of yours, and I want to know more of you, I just don't know how I'll express myself but when I've been given a chance I'll try my best to reach your expectation, I just want you to know how I feel about you because I feel like I'm gonna regret it if I don't, but if you don't want to it's alright I respect your decision, I just want you to know this even though you already know about this but it's still different when I'm the one telling it, and sorry for doing this kind of thing I hope you appreciate this Letter and that's all I hope your doing alright Denisse......... amd sorry if wrong grammar yung iba I don't usually write English Letters, or even made any for anyone, your the First.";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
