boxes = document.querySelectorAll(".boxes");
ans = document.querySelectorAll(".ans");
boxes.forEach((box, idx) => {
  box.addEventListener("click", () => {
    ans.forEach((an) => {
      an.classList.add("hidden");
    });

    if (ans[idx].classList.contains("hidden")) {
      ans[idx].classList.remove("hidden");
    } else {
      ans[idx].classList.add("hidden");
    }
  });
});
