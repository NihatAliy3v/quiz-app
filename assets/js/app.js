const trueAnswer = ["A", "A", "A"];
const result = document.querySelector(".result-text-container");
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedAnswer = [form.sual1.value, form.sual2.value, form.sual3.value];
  let count = 0;
  selectedAnswer.forEach((item, index) => {
    if (item == trueAnswer[index]) {
      count++;
    }
  });
  let puan = Math.round((count / trueAnswer.length) * 100);
  result.innerHTML = `
  <p class="result-description">sizin puanunuz <span class="result-text">%${puan}</span>-dir</p>
  `;
});
