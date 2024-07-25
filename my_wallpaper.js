//your parameter variables go here!
let triangle_height  = 100;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(144, 224, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  stroke(78, 153, 77)
  fill(78, 153, 77)
  circle(30,139,17) //flippper left 
  circle(70,139,17) //flipper right
  ellipse(50,100,60,100) //body
  noStroke() //remove top half of ellipse
  fill(144, 224, 240)
  rect(15,35,70,65)
  fill(78, 153, 77) 
  stroke(78, 153, 77)
  circle(50,100,60) //body
  circle(50,65,25) //head
  triangle(37,145,63,145,50,160) //tail
  
  //arms :D
  line(70,85,95,80)
  line(70,95,95,95)
 
}
