//your parameter variables go here!
let triangle_height  = 100;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 400;
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
  /*stroke(200)
  line (50,0,50,200)
  line (100,0,100,200)
  line (150,0,150,200)
  line (0,50,200,50)
  line (0,100,200,100)
  line (0,150,200,150)
  stroke(0)*/

  //p5.js example
  //bezier(100,150,50,50,250,50,200,150);
  // bezier(start point x,y ; control points to define curve ; end point x,y;)
  // beziers can have as many control points as you want


  //turtle attempt 2 :)
  bezier(35,54,20,20,80,20,65,54) //head
  bezier(50,150,-10,85,25,50,50,50) //left body left
  bezier(50,150,110,85,75,50,50,50) //left body right
  bezier(71,122,87,128,77,152,60,138) //flipper left
  bezier(29,122,13,128,23,152,40,138) //flipper right
  //line(0,75,200,75)
  //line(0,122,200,122)
  //line(0,138,200,138)
  //line(29,0,29,200)
  //line(40,0,40,200)

  //line(0,143,200,143)
 // line(0,75,200,75)


  //flipped turtle
  //bezier(35,54,20,20,80,20,65,54) //head
 /* bezier(135,146,120,180,180,180,165,146)
  bezier(150,50,90,115,125,150,150,150) //right body left
  bezier(150,50,210,115,175,150,150,150) //right body right
 
  //line(0,62,200,62)
  //line(0,78,200,78)
  bezier(129,78,113,72,123,48,140,62) //right flipper left
  bezier(171,78,187,72,177,48,160,62) //right fliper right
*/
  
  //flipped turtle offset 
  bezier(135,196,120,230,180,230,165,196)
  bezier(150,100,90,165,125,200,150,200)
  bezier(150,100,210,165,175,200,150,200)
  bezier(129,128,113,122,123,98,140,112)
  bezier(171,128,187,122,177,98,160,112)

  // agian!
  bezier(135,346,120,380,180,380,165,346)
  bezier(150,250,90,315,125,350,150,350)
  bezier(150,250,210,315,175,350,150,350)
  bezier(129,278,113,272,123,248,140,262)
  bezier(171,278,187,272,177,248,160,262)

  // a third time!


}
