//your parameter variables go here!
let triangle_height  = 160;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 300;
  pWallpaper.grid_settings.cell_height = 400;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(48, 120, 138); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  noFill()
  triangle (150, 100, 60, 300, 150, 300)
  triangle (150, 90, 260, 300, 150, 300)
  line (150, 100, 150, 320)

}
