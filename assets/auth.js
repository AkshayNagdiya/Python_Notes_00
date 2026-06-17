// const pages = {
//   1: "a7k92m1x.html",
//   2: "p4z8q2n9.html",
//   3: "x1r7t5w3.html",
//   4: "m8k2q1z4.html",
//   5: "n5r9a7p2.html",
//   6: "d4t8x1w6.html",
//   7: "u2v9b3c5.html",
//   8: "j7h4k2m8.html",
//   9: "s1q5r8t3.html",
//   10: "e9f2g6h4.html",
//   11: "l3p7w1z9.html",
//   12: "y8n4c2v6.html",
// };

const pages = {
  1: "day-01.html",
  2: "day-02.html",
  3: "day-03.html",
  4: "day-04.html",
  5: "day-05.html",
  6: "day-06.html",
  7: "day-07.html",
  8: "day-08.html",
  9: "day-09.html",
  10: "day-10.html",
  11: "day-11.html",
  12: "day-12.html",
};

const dayPasswords = {
  1: "Adil@123",
  2: "python02",
  3: "Java03",
  4: "Gits@123",
  5: "shivam@123",
  6: "Akshay@321",
  7: "Anmol@090",
  8: "Imran@899",
  9: "Ak@123",
  10: "Ak@123",
  11: "Shabbar@123",
  12: "azim@420",
};

// function openDay(page) {
//   let password = prompt("Enter password for this day:");

//   if (password === dayPasswords[page]) {
//     window.location.href = `daily-code/${pages[day]}`;
//   } else {
//     alert("Incorrect Password ❌");
//   }
// }
let selectedDay = null;

function openDay(day) {
  selectedDay = day;

  document.getElementById("passwordModal").style.display = "flex";
  document.getElementById("passwordInput").value = "";
  document.getElementById("passwordInput").focus();
}

function closeModal() {
  document.getElementById("passwordModal").style.display = "none";
}

function checkPassword() {
  const password = document.getElementById("passwordInput").value;

  if (password === dayPasswords[selectedDay]) {
    sessionStorage.setItem("allowedDay", selectedDay);
    window.location.href = `daily-code/${pages[selectedDay]}`;
  }

  if (password !== dayPasswords[selectedDay]) {
    alert("Incorrect Password ❌");
    return;
  }

  const targetPage = pages[selectedDay];

  console.log("Opening:", targetPage);

  closeModal();

  window.location.href = `daily-code/${targetPage}`;
}
