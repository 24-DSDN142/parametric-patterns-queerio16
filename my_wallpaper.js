//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A4);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  background(170);

  //shark
noStroke()
fill(0)  //eyes
ellipse(53,80,10,17)
ellipse(117,80,10,17)
fill(255)  //eye whites
ellipse(118,75,3,4)
ellipse(52,75,3,4)
fill(80)  //body
ellipse(85,170,85,270)
fill(255)
ellipse(85,200,75,270)
fill(50)
ellipse(98,60,4,7)
ellipse(72,60,4,7)
fill(200,0,25)  //red mouth
ellipse(85,210,60,250)
fill(255)  //mouth cut off
ellipse(85,180,70,150)


  //bow
  fill(210,132,30)
circle(85,35,10)
triangle(70,30,70,40,85,35)
triangle(100,30,100,40,85,35)


  //waves
fill(170)
rect(0,160,200,200)
stroke(0,34,125)
fill(0,34,125);
ellipse(5,160,40,40)
fill(170)
stroke(170)
ellipse(5,165,40,40)

stroke(0,34,125)
fill(0,34,125);
ellipse(45,160,40,40)
fill(170)
stroke(170)
ellipse(45,165,40,40)

stroke(0,34,125)
fill(0,34,125);
ellipse(85,160,40,40)
fill(170)
stroke(170)
ellipse(85,165,40,40)

stroke(0,34,125)
fill(0,34,125);
ellipse(125,160,40,40)
fill(170)
stroke(170)
ellipse(125,165,40,40)

stroke(0,34,125)
fill(0,34,125);
ellipse(165,160,40,40)
fill(170)
stroke(170)
ellipse(165,165,40,40)

stroke(0,34,125)
fill(0,34,125);
ellipse(205,160,40,40)
fill(170)
stroke(170)
ellipse(205,165,40,40)


stroke(0,34,125)
fill(0,34,125);
ellipse(5,180,40,40)
fill(170)
stroke(170)
ellipse(5,185,40,40)

stroke(0,34,125)
fill(0,34,125);
ellipse(45,180,40,40)
fill(170)
stroke(170)
ellipse(45,185,40,40)

stroke(0,34,125)
fill(0,34,125);
ellipse(85,180,40,40)
fill(170)
stroke(170)
ellipse(85,185,40,40)

stroke(0,34,125)
fill(0,34,125);
ellipse(125,180,40,40)
fill(170)
stroke(170)
ellipse(125,185,40,40)

stroke(0,34,125)
fill(0,34,125);
ellipse(165,180,40,40)
fill(170)
stroke(170)
ellipse(165,185,40,40)

stroke(0,34,125)
fill(0,34,125);
ellipse(205,180,40,40)
fill(170)
stroke(170)
ellipse(205,185,40,40)


stroke(0,34,125)
fill(0,34,125);
ellipse(5,200,40,40)
fill(170)
stroke(170)
ellipse(5,205,40,40)

stroke(0,34,125)
fill(0,34,125);
ellipse(45,200,40,40)
fill(170)
stroke(170)
ellipse(45,205,40,40)

stroke(0,34,125)
fill(0,34,125);
ellipse(85,200,40,40)
fill(170)
stroke(170)
ellipse(85,205,40,40)

stroke(0,34,125)
fill(0,34,125);
ellipse(125,200,40,40)
fill(170)
stroke(170)
ellipse(125,205,40,40)

stroke(0,34,125)
fill(0,34,125);
ellipse(165,200,40,40)
fill(170)
stroke(170)
ellipse(165,205,40,40)

stroke(0,34,125)
fill(0,34,125);
ellipse(205,200,40,40)
fill(170)
stroke(170)
ellipse(205,205,40,40);

}
