const submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result=document.getElementById("result")
  if (!height || !weight) {
result.innerText="please enter height and weight"
result.style.color="red"
return
}
const heightmetre=height/100
const bmi=(weight/(heightmetre*heightmetre)).toFixed(2)
let list=""
let color=""
if(bmi<18.5){
    list="UNDERWEIGHT"
color="orange"
}
 else if (bmi < 24.9)
    { list = "NORMAL WEIGHT";
        color="green"
    }

  else if (bmi < 29.9) 
    {list = "OVERWEIGHT";
  color="yellow"
    }
  else{

   list = "OBESE";
  color="maroon"

  }
  result.innerText=`YOUR BMI IS: ${bmi} and it is 
  ${list}`
  result.style.color=color
});
