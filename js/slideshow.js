const slideshowInner = document.querySelector(".slideshow-inner");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const pagination = document.querySelector(".pagination");

let currentIndex = 0;
let totalSlides = slides.length;
let interval = null;

// Di chuyển đến slide theo index
  function goToSlide(index){
    //Giới hạn chỉ số trong phạm vi hợp lệ
    if(index < 0){
      index = totalSlides - 1;
    } 
    if(index >= totalSlides){
      index = 0;
    }
    currentIndex = index;

    //Dịch chuyển slide
    slideshowInner.style.transform = `translate(${index * 100}%)`

    updatePagimation();
  }

  //Cập nhật trạng thái của pagination
  function updatePagimation(){
    const dots = document.querySelectorAll(".pagination span");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  //Tạo dấu chấm của pagination
  function createPagination(){
    for(let i = 0; i < totalSlides; i++){
      const dot = document.createElement("span");
      if(i === 0)dot.classList.add("active");
      dot.addEventListener("click", () => goToSlide(i));
      pagination.appendChild(dot)
    }
  }

  //Chuyển slide kế tiếp
  function nextSlide(){
    goToSlide(currentIndex + 1);
  }

  //Chuyển về slide trước
  function prevSlide(){
    goToSlide(currentIndex - 1);
  }

  //Tự động chạy Slide
  function startAutoPlay(){
    interval = setInterval(nextSlide, 3000);
  }

  //Dừng autoplay khi đưa chuột vào
  function stopAutoPlay(){
    clearInterval(interval);
  }

  //Gán sự kiện 
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
  document.querySelector(".slideshow-container").addEventListener("mouseenter", stopAutoPlay);
  document.querySelector(".slideshow-container").addEventListener("mouseleave", startAutoPlay);

  createPagination();
  goToSlide(0);
  startAutoPlay();
