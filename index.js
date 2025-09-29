const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
const result = document.getElementById("result");

submit.addEventListener("click", (event) => {
  event.preventDefault();

  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);

  if (!height || !weight) {
    result.innerText = "⚠️ Please enter height and weight!";
    result.style.color = "red";
    return;
  }

  const heightMetre = height / 100;
  const bmi = (weight / (heightMetre * heightMetre)).toFixed(2);

  let category = "";
  let color = "";

  if (bmi < 18.5) {
    category = "UNDERWEIGHT";
    color = "orange";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "NORMAL WEIGHT";
    color = "green";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "OVERWEIGHT";
    color = "yellow";
  } else {
    category = "OBESE";
    color = "maroon";
  }

  result.innerText = `YOUR BMI IS: ${bmi} (${category})`;
  result.style.color = color;
});

// Reset inputs and result
reset.addEventListener("click", () => {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  result.innerText = "";
});
