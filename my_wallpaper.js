//your parameter variables go here!
let triangle_height  = 100;
let rect_height = 20;
let shift_right = (+50)


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 300;  // so much less work to have it at 300 instead of 400. few
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(252, 247, 220); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //turtle attempt 2 :)

  //colouring
  fill(79, 121, 66)
  noStroke()

  bezier(35,54,20,20,80,20,65,54) //head
  fill(28, 128, 0)
  bezier(50,150,-10,85,25,50,50,50) //left body left
  bezier(50,150,110,85,75,50,50,50) //left body right
  fill(79, 121, 66)
  bezier(71,122,87,128,77,152,60,138) //flipper left
  bezier(29,122,13,128,23,152,40,138) //flipper right
  
  //flipped turtle
  //bezier(35,54,20,20,80,20,65,54) //head
 /* bezier(135,146,120,180,180,180,165,146)
  bezier(150,50,90,115,125,150,150,150) //right body left
  bezier(150,50,210,115,175,150,150,150) //right body right
  bezier(129,78,113,72,123,48,140,62) //right flipper left
  bezier(171,78,187,72,177,48,160,62) //right fliper right
*/
  
  //flipped turtle offset 
  bezier(135,196,120,230,180,230,165,196)
  fill(28, 128, 0)
  bezier(150,100,90,165,125,200,150,200)
  bezier(150,100,210,165,175,200,150,200)
  fill(79, 121, 66)
  bezier(129,128,113,122,123,98,140,112)
  bezier(171,128,187,122,177,98,160,112)

  // agian!
  bezier(135,346,120,380,180,380,165,346)
  fill(28, 128, 0)
  bezier(150,250,90,315,125,350,150,350)
  bezier(150,250,210,315,175,350,150,350)
  fill(79, 121, 66)
  bezier(129,278,113,272,123,248,140,262)
  bezier(171,278,187,272,177,248,160,262)

  // the original turtle offest now!!
  bezier(35,204,20,170,80,170,65,204) //head
  fill(28, 128, 0)
  bezier(50,300,-10,235,25,200,50,200) //left body left
  bezier(50,300,110,235,75,200,50,200) //left body right
  fill(79, 121, 66)
  bezier(71,272,87,278,77,302,60,288) //flipper left
  bezier(29,272,13,278,23,302,40,288) //flipper right

  bezier(35, 54, 20, 20,80, 20,65, 54) //head
  fill(28, 128, 0)
  bezier(50,150,-10, 85,25, 50,50, 50) //left body left
  bezier(50,150,110, 85,75, 50,50, 50) //left body right
  fill(79, 121, 66)
  bezier(71,122, 87,128,77,152,60,138) //flipper left
  bezier(29,122, 13,128,23,152,40,138) //flipper right


}
