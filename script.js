boxes = document.querySelectorAll(".boxes");
ans = document.querySelectorAll(".ans");

hideAns = () => {
  ans.forEach((an) => {
    an.classList.add("hidden");
  });
};

boxes.forEach((box, idx) => {
  box.addEventListener("click", () => {
    if (!ans[idx].classList.contains("hidden")) {
      ans[idx].classList.add("hidden");
    } else {
      hideAns();
      ans[idx].classList.remove("hidden");
    }
  });
});
