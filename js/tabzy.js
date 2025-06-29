const tabButtons = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.content');

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Bỏ active của tất cả tab và nội dung
    tabButtons.forEach(tab => tab.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // Thêm active cho tab và nội dung được chọn
    button.classList.add("active");
    tabContents[index].classList.add("active");
  });
});