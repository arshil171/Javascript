let imageArray = ["./img-1.jpg", "./img-2.jpg", "./img-3.jpg", "./img-4.jpg", "./img-5.jpg"]
let next = document.getElementById("next")
let prev = document.getElementById("prev")
let image = document.getElementById("image")

let count = 0;

image.style.height = "100%";

function nextFun(){
  console.log("clicked")
}

next.addEventListener("click", () => {
  if (count == imageArray.length - 1) {
    count = 0;
  } else {
    count++;
  }

  ShowData();
});

prev.addEventListener("click", () => {
  if (count == 0) {
    count = imageArray.length - 1;
  } else {
    count--;
  }
  ShowData();
});

function ShowData() {
  image.src = imageArray[count];
}

ShowData();