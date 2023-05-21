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
  let point = Math.round((count / trueAnswer.length) * 100);
  let animationPoint = 0;
  const animation = setInterval(() => {
    if (animationPoint == point) {
      clearInterval(animation);
    } else {
      animationPoint++;
      result.innerHTML = `
      <p class="result-description">Sizin balınız - <span class="result-text">%${animationPoint}</span></p>
      `;
    }
  }, 100);
  scrollTo(0, 0);
});
