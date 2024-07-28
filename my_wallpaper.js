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
  background(252, 247, 220); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  /*beginShape();
  vertex(0,-100);
  bezierVertex(0,-50,50,0,100,0);
  bezierVertex(50,0,0,50,0,100);
  bezierVertex(0,50,-50,0,-100,0)
  bezierVertex(-50,0,0,-50,0,-100);
  endShape();*/

  //grid
  stroke(200)
  line (50,0,50,200)
  line (100,0,100,200)
  line (150,0,150,200)
  line (0,50,200,50)
  line (0,100,200,100)
  line (0,150,200,150)
  stroke(0)

  //p5.js example
  //bezier(100,150,50,50,250,50,200,150);
  // bezier(start point x,y ; control points to define curve ; end point x,y;)
  // beziers can have as many control points as you want


  //turtle attempt 2 :)
  bezier(35,54,20,20,80,20,65,54) //head
  bezier(50,150,-10,85,25,50,50,50) //body left
  bezier(50,150,110,85,75,50,50,50) //body right
  //line(0,75,200,75)
  bezier(71,122,87,128,77,152,60,138) //flipper left
  //line(0,122,200,122)
  //line(0,138,200,138)
  //line(29,0,29,200)
  //line(40,0,40,200)
  bezier(29,122,13,128,23,152,40,138) //flipper right
  //line(0,143,200,143)
 // line(0,75,200,75)

  //flipped turtle
  //bezier(150,150,90,85,125,150,150,50)
  bezier(150,50,90,115,125,150,150,150)
  bezier(150,50,210,115,175,150,150,150)
}
