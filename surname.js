/* 
 * Student Number: 225203549
 * DSW02A1 - Graded Lab 5
 * Question 2: African Surnames Blender
 */

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("blend-btn").addEventListener("click", function () {

    let surname = document.getElementById("surname").value.trim();

    if (surname === "") {
      alert("Please type a surname first!");
      return;
    }

    let output = document.getElementById("output");
    output.innerHTML = "";

    let fontFamily = document.getElementById("font").value;
    let fontSize = parseInt(document.getElementById("fontSize").value) || 16;

    // colour to use
    let colorChoice = document.getElementById("colorSelect").value;
    let textColor;
    if (colorChoice === "custom") {
      textColor = document.getElementById("colorPicker").value;
    } else {
      textColor = colorChoice;
    }

    // here we find which radio button is selected
    let positionValue = "seq";
    let radios = document.getElementsByName("pos");
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        positionValue = radios[i].value;
        break;
      }
    }

    // here we buuild the array of characters
    let chars;
    if (positionValue === "rev") {
      chars = surname.split("").reverse();
    } else {
      chars = surname.split("");
    }

    // Place each character in the output div
    for (let j = 0; j < chars.length; j++) {
      let span = document.createElement("span");
      span.textContent = chars[j];
      span.className = "letter-span";

      span.style.fontFamily = fontFamily;
      span.style.fontSize = fontSize + "px";
      span.style.color = textColor;

      if (positionValue === "rand") {
        // Random position
        let randomX = Math.floor(Math.random() * 300);
        let randomY = Math.floor(Math.random() * 100);
        span.style.left = randomX + "px";
        span.style.top = randomY + "px";
      } else {
        // Sequential or Reverse: 15px steps
        let step = (j + 1) * 15;
        span.style.left = step + "px";
        span.style.top = step + "px";
      }

      output.appendChild(span);
    }
  });

  // Color select toggles picker
  document.getElementById("colorSelect").addEventListener("change", function () {
    let picker = document.getElementById("colorPicker");
    picker.style.opacity = (this.value === "custom") ? "1" : "0.4";
  });

});