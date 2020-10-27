console.log('traffic light loaded.')

const changeColor = function(color) {
  let light = document.getElementById('traffic-light');
  light.style.backgroundColor = color;
}

const sleep = function(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  })
}

async function runTrafficLight() {
  while(true) {
    changeColor("green");
    await sleep(10000);
    changeColor("yellow");
    await sleep(2000);
    changeColor("red")
    await sleep(5000);
  }
}

runTrafficLight();