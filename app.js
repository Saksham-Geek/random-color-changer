// obtaining the button
const btn = document.getElementById('button');
// obtaining the canvas


// function to generate a random number
const randomColor = () => {
  let val = '1234567890ABCDEF'; // 10 + 6 = 16 char
  let hash = '#'; 

  // HEX = # + 16char = #16char

  for (let i = 0; i < 6; i++) {
    hash = hash + val[Math.floor(Math.random() * 16)]; // here we are getting the index value between 1 - 16 of val 6 times to get 6 digits for HEX value so the loop runs 6 times then we are concatinating it with #
//    #  = #    +  val[356794]   = #356D9A
  }
    return hash; // #356D9A
  };


// console.log(randomColor()); // eg. #70C0F1
function ChangeColor() {  // this function sets the background to the canvas div using randomColor() output hex value
    let canvas = document.getElementById('canvas');
    canvas.style.backgroundColor = randomColor();
}

btn.addEventListener("click", ChangeColor);
