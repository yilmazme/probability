const resetBtn = document.querySelector("#reset-btn");
const aproveBtn = document.querySelector("#aprove-btn");
const denyBtn = document.querySelector("#deny-btn");
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const warning = document.querySelector("#warning");
const statistic1 = document.querySelector("#statistic1");
const statistic2 = document.querySelector("#statistic2");
const probability1 = document.querySelector("#probability1");
const probability2 = document.querySelector("#probability2");

var start = true;

const list = [1, 2, 3];
var random;
function resetFunction() {
  random = Math.ceil(Math.random() * 3);
  div1.style.background = "linear-gradient(90deg, #721b65, #d1d646)";
  div2.style.background = "linear-gradient(90deg, #721b65, #d1d646)";
  div3.style.background = "linear-gradient(90deg, #721b65, #d1d646)";
  div1.innerHTML = "";
  div2.innerHTML = "";
  div3.innerHTML = "";
  warning.innerHTML = "Bol Şans!";
  aproveBtn.style.visibility = "hidden";
  denyBtn.style.visibility = "hidden";
  resetBtn.style.visibility = "hidden";
  start = true;
  console.log(random, "here you can track the answer:)");
}

window.addEventListener("load", () => {
  random = Math.ceil(Math.random() * 3);
  div1.style.background = "linear-gradient(90deg, #721b65, #d1d646)";
  div2.style.background = "linear-gradient(90deg, #721b65, #d1d646)";
  div3.style.background = "linear-gradient(90deg, #721b65, #d1d646)";
  div1.innerHTML = "";
  div2.innerHTML = "";
  div3.innerHTML = "";
  warning.innerHTML = "Bol Şans!";
  warning.style.color = "red";
  start = true;
  console.log(random, "here you can track the answer:)");
});

var choice;
var random1;
div1.addEventListener("click", () => {
  if (start) {
    div1.style.background = "green";
    warning.innerHTML = "Tercihiniz ile devam etmek istiyor musunuz?";
    choice = 1;
    random1 = Math.ceil(Math.random() * 2);
    if (random == 2) {
      div3.style.backgroundImage = "url(./false.jpg)";
      div3.style.backgroundSize = "cover";
    } else if (random == 3) {
      div2.style.backgroundImage = "url(./false.jpg)";
      div2.style.backgroundSize = "cover";
    } else if (random == 1) {
      if (random1 == 1) {
        div2.style.backgroundImage = "url(./false.jpg)";
        div2.style.backgroundSize = "cover";
      } else {
        div3.style.backgroundImage = "url(./false.jpg)";
        div3.style.backgroundSize = "cover";
      }
    }
    start = false;
    aproveBtn.style.visibility = "visible";
    denyBtn.style.visibility = "visible";
  }
});
div2.addEventListener("click", () => {
  if (start) {
    div2.style.background = "green";
    warning.innerHTML = "Tercihiniz ile devam etmek istiyor musunuz?";
    choice = 2;
    random1 = Math.ceil(Math.random() * 2);
    if (random == 1) {
      div3.style.backgroundImage = "url(./false.jpg)";
      div3.style.backgroundSize = "cover";
    } else if (random == 3) {
      div1.style.backgroundImage = "url(./false.jpg)";
      div1.style.backgroundSize = "cover";
    } else if (random == 2) {
      if (random1 == 1) {
        div1.style.backgroundImage = "url(./false.jpg)";
        div1.style.backgroundSize = "cover";
      } else {
        div3.style.backgroundImage = "url(./false.jpg)";
        div3.style.backgroundSize = "cover";
      }
    }
    start = false;
    aproveBtn.style.visibility = "visible";
    denyBtn.style.visibility = "visible";
  }
});
div3.addEventListener("click", () => {
  if (start) {
    div3.style.background = "green";
    warning.innerHTML = "Tercihiniz ile devam etmek istiyor musunuz?";
    choice = 3;
    random1 = Math.ceil(Math.random() * 2);
    if (random == 2) {
      div1.style.backgroundImage = "url(./false.jpg)";
      div1.style.backgroundSize = "cover";
    } else if (random == 1) {
      div2.style.backgroundImage = "url(./false.jpg)";
      div2.style.backgroundSize = "cover";
    } else if (random == 3) {
      if (random1 == 1) {
        div1.style.backgroundImage = "url(./false.jpg)";
        div1.style.backgroundSize = "cover";
      } else {
        div2.style.backgroundImage = "url(./false.jpg)";
        div2.style.backgroundSize = "cover";
      }
    }
    start = false;
    aproveBtn.style.visibility = "visible";
    denyBtn.style.visibility = "visible";
  }
});
var stat1 = 0;
var stat2 = 0;
var prob1;
var prob2;

aproveBtn.addEventListener("click", () => {
  if (choice == random) {
    warning.innerHTML = "Tebrikler!! :)";
    warning.style.color = "green";
    stat1 += 1;
    prob1 = (stat1 / (stat1 + stat2)) * 100;
    prob2 = (stat2 / (stat1 + stat2)) * 100;
    statistic1.innerHTML = stat1;
    statistic2.innerHTML = stat2;
    probability1.innerHTML = Number(prob1).toFixed(1);
    probability2.innerHTML = Number(prob2).toFixed(1);
  } else {
    warning.innerHTML = "Maalesef :(";
    warning.style.color = "red";
    stat2 += 1;
    prob1 = (stat1 / (stat1 + stat2)) * 100;
    prob2 = (stat2 / (stat1 + stat2)) * 100;
    statistic1.innerHTML = stat1;
    statistic2.innerHTML = stat2;
    probability1.innerHTML = Number(prob1).toFixed(1);
    probability2.innerHTML = Number(prob2).toFixed(1);
  }
  if (random == 1) {
    div1.style.backgroundImage = "url(./true.jpg)";
    div1.style.backgroundSize = "cover";
    div2.style.backgroundImage = "url(./false.jpg)";
    div2.style.backgroundSize = "cover";
    div3.style.backgroundImage = "url(./false.jpg)";
    div3.style.backgroundSize = "cover";
  } else if (random == 2) {
    div2.style.backgroundImage = "url(./true.jpg)";
    div2.style.backgroundSize = "cover";
    div1.style.backgroundImage = "url(./false.jpg)";
    div1.style.backgroundSize = "cover";
    div3.style.backgroundImage = "url(./false.jpg)";
    div3.style.backgroundSize = "cover";
  } else if (random == 3) {
    div3.style.backgroundImage = "url(./true.jpg)";
    div3.style.backgroundSize = "cover";
    div1.style.backgroundImage = "url(./false.jpg)";
    div1.style.backgroundSize = "cover";
    div2.style.backgroundImage = "url(./false.jpg)";
    div2.style.backgroundSize = "cover";
  }
  aproveBtn.style.visibility = "hidden";
  denyBtn.style.visibility = "hidden";
  resetBtn.style.visibility = "visible";
});

denyBtn.addEventListener("click", () => {
  if (choice == 1 && random == 1) {
    warning.innerHTML = "Maalesef :(";
    warning.style.color = "red";
    stat1 += 1;
    prob1 = (stat1 / (stat1 + stat2)) * 100;
    prob2 = (stat2 / (stat1 + stat2)) * 100;
    statistic1.innerHTML = stat1;
    statistic2.innerHTML = stat2;
    probability1.innerHTML = Number(prob1).toFixed(1);
    probability2.innerHTML = Number(prob2).toFixed(1);
  } else if (choice == 1 && random == 2) {
    warning.innerHTML = "Tebrikler!! :)";
    warning.style.color = "green";
    stat2 += 1;
    prob1 = (stat1 / (stat1 + stat2)) * 100;
    prob2 = (stat2 / (stat1 + stat2)) * 100;
    statistic1.innerHTML = stat1;
    statistic2.innerHTML = stat2;
    probability1.innerHTML = Number(prob1).toFixed(1);
    probability2.innerHTML = Number(prob2).toFixed(1);
  } else if (choice == 1 && random == 3) {
    warning.innerHTML = "Tebrikler!! :)";
    warning.style.color = "green";
    stat2 += 1;
    prob1 = (stat1 / (stat1 + stat2)) * 100;
    prob2 = (stat2 / (stat1 + stat2)) * 100;
    statistic1.innerHTML = stat1;
    statistic2.innerHTML = stat2;
    probability1.innerHTML = Number(prob1).toFixed(1);
    probability2.innerHTML = Number(prob2).toFixed(1);
  } else if (choice == 2 && random == 2) {
    warning.innerHTML = "Maalesef :(";
    warning.style.color = "red";
    stat1 += 1;
    prob1 = (stat1 / (stat1 + stat2)) * 100;
    prob2 = (stat2 / (stat1 + stat2)) * 100;
    statistic1.innerHTML = stat1;
    statistic2.innerHTML = stat2;
    probability1.innerHTML = Number(prob1).toFixed(1);
    probability2.innerHTML = Number(prob2).toFixed(1);
  } else if (choice == 2 && random == 1) {
    warning.innerHTML = "Tebrikler!! :)";
    warning.style.color = "green";
    stat2 += 1;
    prob1 = (stat1 / (stat1 + stat2)) * 100;
    prob2 = (stat2 / (stat1 + stat2)) * 100;
    statistic1.innerHTML = stat1;
    statistic2.innerHTML = stat2;
    probability1.innerHTML = Number(prob1).toFixed(1);
    probability2.innerHTML = Number(prob2).toFixed(1);
  } else if (choice == 2 && random == 3) {
    warning.innerHTML = "Tebrikler!! :)";
    warning.style.color = "green";
    stat2 += 1;
    prob1 = (stat1 / (stat1 + stat2)) * 100;
    prob2 = (stat2 / (stat1 + stat2)) * 100;
    statistic1.innerHTML = stat1;
    statistic2.innerHTML = stat2;
    probability1.innerHTML = Number(prob1).toFixed(1);
    probability2.innerHTML = Number(prob2).toFixed(1);
  } else if (choice == 3 && random == 3) {
    warning.innerHTML = "Maalesef :(";
    warning.style.color = "red";
    stat1 += 1;
    prob1 = (stat1 / (stat1 + stat2)) * 100;
    prob2 = (stat2 / (stat1 + stat2)) * 100;
    statistic1.innerHTML = stat1;
    statistic2.innerHTML = stat2;
    probability1.innerHTML = Number(prob1).toFixed(1);
    probability2.innerHTML = Number(prob2).toFixed(1);
  } else if (choice == 3 && random == 1) {
    warning.innerHTML = "Tebrikler!! :)";
    warning.style.color = "green";
    stat2 += 1;
    prob1 = (stat1 / (stat1 + stat2)) * 100;
    prob2 = (stat2 / (stat1 + stat2)) * 100;
    statistic1.innerHTML = stat1;
    statistic2.innerHTML = stat2;
    probability1.innerHTML = Number(prob1).toFixed(1);
    probability2.innerHTML = Number(prob2).toFixed(1);
  } else if (choice == 3 && random == 2) {
    warning.innerHTML = "Tebrikler!! :)";
    warning.style.color = "green";
    stat2 += 1;
    prob1 = (stat1 / (stat1 + stat2)) * 100;
    prob2 = (stat2 / (stat1 + stat2)) * 100;
    statistic1.innerHTML = stat1;
    statistic2.innerHTML = stat2;
    probability1.innerHTML = Number(prob1).toFixed(1);
    probability2.innerHTML = Number(prob2).toFixed(1);
  }
  if (random == 1) {
    div1.style.backgroundImage = "url(./true.jpg)";
    div1.style.backgroundSize = "cover";
    div2.style.backgroundImage = "url(./false.jpg)";
    div2.style.backgroundSize = "cover";
    div3.style.backgroundImage = "url(./false.jpg)";
    div3.style.backgroundSize = "cover";
  } else if (random == 2) {
    div2.style.backgroundImage = "url(./true.jpg)";
    div2.style.backgroundSize = "cover";
    div1.style.backgroundImage = "url(./false.jpg)";
    div1.style.backgroundSize = "cover";
    div3.style.backgroundImage = "url(./false.jpg)";
    div3.style.backgroundSize = "cover";
  } else if (random == 3) {
    div3.style.backgroundImage = "url(./true.jpg)";
    div3.style.backgroundSize = "cover";
    div1.style.backgroundImage = "url(./false.jpg)";
    div1.style.backgroundSize = "cover";
    div2.style.backgroundImage = "url(./false.jpg)";
    div2.style.backgroundSize = "cover";
  }
  aproveBtn.style.visibility = "hidden";
  denyBtn.style.visibility = "hidden";
  resetBtn.style.visibility = "visible";
});
function resetFunction2() {
  prob1 = 0;
  prob2 = 0;
  stat1 = 0;
  stat2 = 0;
  statistic1.innerHTML = stat1;
  statistic2.innerHTML = stat2;
  probability1.innerHTML = Number(prob1).toFixed(1);
  probability2.innerHTML = Number(prob2).toFixed(1);
}
