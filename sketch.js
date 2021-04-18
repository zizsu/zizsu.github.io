let gray = [];

function setup() {
    createCanvas(240, 120);
  
    for(let i = 0; i < width; i++){     
      gray[i] = random(0, 255);
    }
}

function draw() {
   for(let i = 0; i < gray. length; i++){

        if(mouseX == i) {
            stroke(255, 0, 0);
        } else {
            stroke(gray[i]);
        }
       
        line(i, 0, i, height);
      
    }
}

// i++ 는 i = i + 1