function setup() {
    createCanvas(400, 400);
    background("pink");
  }
  
  function draw() {
    stroke("green")
    fill("purple");
    
     console.log(mouseIsPressed)
    
   if (mouseIsPressed);{
      rect(mouseX, mouseY, 10, 15);
  }
  }