//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 400;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(48, 120, 138); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  line (100, 100, 100, 300)
}
