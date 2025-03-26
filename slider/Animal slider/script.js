let imageArray = ["https://images.pexels.com/photos/31317394/pexels-photo-31317394/free-photo-of-scenic-drive-through-capitol-reef-national-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "./img-2.jpg", "./img-3.jpg", "./img-4.jpg", "./img-5.jpg"]
let next = document.getElementById("next")
let prev = document.getElementById("prev")
let image = document.getElementById("image")
// img.innerHTML = imageArray[0]
// img.style.width=100%;
// img.style.height=100%;
// next.addEventListener=("click",()=>{
//     for(let i=0;i<imageArray.length;i++){
//         img.innerHTML = imageArray[i]
//     }
// })
image.innerHTML = imageArray[1]
// image.src = imageArray[1];

let count = 0;

image.style.height = "200px";

// function nextFun(){
//   console.log("clicked")
// }

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