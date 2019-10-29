function test() {
  Sys.Process("notepad").Window("Notepad", "*").SetFocus();
Sys.Desktop.Keys("John Watts" + "[Tab]" + "Manager");
}