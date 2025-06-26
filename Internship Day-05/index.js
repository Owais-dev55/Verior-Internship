let count = 0;
const incrementBtn = document.getElementById("increment-btn");
const counter = document.getElementById("counter");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
const body = document.querySelector("body");
const themeToggle = document.getElementById("theme-selector");

const increment = () => {
  count++;
};

const handleZeroCounter = () => {
  const para = document.createElement("p");
  para.id = "error-message";
  para.style.position = "absolute";
  para.style.bottom = "10%";
  para.style.left = "42%";
  para.style.fontSize = "20px";
  para.style.fontWeight = "bold";
  para.innerText = "Counter cannot be less than 0";
  para.style.color = "red";
  document.body.appendChild(para);
};

const decrement = () => {
  if (count == 0) {
    handleZeroCounter();
    setTimeout(() => {
      const errorMessage = document.getElementById("error-message");
      if (errorMessage) {
        errorMessage.remove();
      }
    }, 2000);
  } else {
    count--;
  }
};

incrementBtn.addEventListener("click", () => {
  increment();
  counter.innerText = count;
});

decrementBtn.addEventListener("click", () => {
  decrement();
  counter.innerText = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.innerText = count;
});

themeToggle.addEventListener("change", () => {
  if (themeToggle.value === "dark") {
    body.classList.add("darkmode");
  } else {
    body.classList.remove("darkmode");
  }
});
