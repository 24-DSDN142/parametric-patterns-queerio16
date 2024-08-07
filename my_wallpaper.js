//your parameter variables go here!
let shell_colour;
let inner_shell_colour;
let shift_right = (35); // could use a maths var?
let flip_size = (35);
let eye = (6);




// shell shape/line variable

/* palette  https://colorhunt.co/palette/d6efd880af81508d4e1a5319
rgb(214, 239, 216)
rgb(128, 175, 129)
rgb(80, 141, 78)
rgb(26, 83, 25) */

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 300;  // so much less work to have it at 300 instead of 400. few
  pWallpaper.grid_settings.row_offset  = 0;
  
  shell_colour = color(80, 141, 78);
  inner_shell_colour = color(26, 83, 25);
}

function wallpaper_background() {
  background(187, 233, 255); //light honeydew green colour

  if (flip_size > 30) 
    background(212, 184, 255)}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //turtle attempt 2 :)
  
  //colouring
  fill(79, 121, 66)
  noStroke()

  bezier(35,54,20,20,80,20,65,54) //head
  fill(shell_colour)
  bezier(50,150,-10,85,25,50,50,50) //left body left
  bezier(50,150,110,85,75,50,50,50) //left body right
  fill(79, 121, 66)
  bezier(71,122,87,128,77,152,60,138) //flipper right
  bezier(29,122,13,128,23,152,40,138) //flipper left
  
  //flipped turtle offset 
  bezier(135,196,120,230,180,230,165,196)
  fill(shell_colour)
  bezier(150,100,90,165,125,200,150,200)
  bezier(150,100,210,165,175,200,150,200)
  fill(79, 121, 66)
  bezier(129,128,113-(shift_right),122,123,98,140,112)
  bezier(171,128,187+(shift_right),122,177,98,160,112)

  // agian!
  bezier(135,346,120,380,180,380,165,346)
  fill(shell_colour)
  bezier(150,250,90,315,125,350,150,350)
  bezier(150,250,210,315,175,350,150,350)
  fill(79, 121, 66)
  bezier(129,278,113,272,123,248,140,262)
  bezier(171,278,187,272,177,248,160,262)

  // upright bottom turtle
  bezier(35,204,20,170,80,170,65,204) //head
  fill(shell_colour)
  bezier(50,300,-10,235,25,200,50,200) //left body left
  bezier(50,300,110,235,75,200,50,200) //left body right
  fill(79, 121, 66)
  bezier(71,272,87+(shift_right),278,77,302,60,288) //flipper right
  bezier(29,272,13-(shift_right),278,23,302,40,288) //flipper left

  // arms!!!!!!!
  bezier(18,230,5,226,-5,204,27,210)
  bezier(28,59,5,52,-5,70,18,78)

  bezier(71,59,94,52,104,70,82,78)
  bezier(82,230,94,226,104,204,73,210)

  bezier(118,170,98,181,103,202,128,190)
  bezier(118+64,170,98+100,177,103+100,200,128+45,190)

  bezier(118,170+150,98-(flip_size),181+150,103,202+150,128,190+150)
  bezier(118+64,170+150,98+100+(flip_size),177+150,103+100,200+150,128+45,190+150)

  //eye??
  fill(0)
  circle(41,38,eye,eye)
  circle(59,38,eye,eye)
  circle(41,38+150,eye,eye)
  circle(59,38+150,eye,eye)
  circle(41+100,38+24,eye,eye)
  circle(59+100,38+24,eye,eye)
  circle(41+100,38+24+150,eye,eye)
  circle(59+100,38+24+150,eye,eye)

  
  fill(inner_shell_colour)
  //bottom left turtle inner shell
  bezier(50,300-10,-10+10,235-10,25+10,200+7,50,200+7) //left body left
  bezier(50,300-10,110-10,235-10,75-10,200+7,50,200+7) //left body right

  //top left turtle inner shell
  bezier(50,300-10-150,-10+10,235-10-150,25+10,200+7-150,50,200+7-150) //left body left
  bezier(50,300-10-150,110-10,235-10-150,75-10,200+7-150,50,200+7-150) //left body right

  //top right turtle inner shell
  bezier(150,100+10, 90+10,165+10,125+10,200-7,150,200-7)
  bezier(150,100+10,210-10,165+10,175-10,200-7,150,200-7)

  //bottom right turtle inner shell
  bezier(150,100+10+150, 90+10,165+10+150,125+10,200-7+150,150,200-7+150)
  bezier(150,100+10+150,210-10,165+10+150,175-10,200-7+150,150,200-7+150)
}
