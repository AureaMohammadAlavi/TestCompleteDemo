function test() {

 var menuBar = Aliases.javaw.JfrmMain.RootPane.null_layeredPane.MenuBar;
 var ordersMenu = menuBar.SwingMenu.Items("Orders");
 Log.Message(ordersMenu.Caption)
 Aliases.javaw.JfrmMain.Activate()
 
 var frame = Sys.Process("javaw").SwingObject("JfrmMain", "Orders - Untitled", 0);
 
 var rootPane = frame.SwingObject("JRootPane", "", 0);
 var layeredPane = rootPane.SwingObject("null.layeredPane");
 var menuBar = layeredPane.SwingObject("JMenuBar", "", 0);
 var ordersMenu2 = menuBar.SwingObject("JMenu", "Orders", 1);
 
 
 var panel =  layeredPane.SwingObject("JPanel", "", 0);
 Log.Message(ordersMenu2.Visible)
 //Aliases.javaw.JfrmMain.RootPane.null_layeredPane.Activate()
 
var glassPane = Sys.Process("javaw").SwingObject("JfrmMain", "Orders - Untitled", 0)
.SwingObject("JRootPane", "", 0).SwingObject("null.glassPane");

 ordersMenu2.Click()
 
 
 
 aqUtils.Delay(1000)
 
 //ordersMenu2.SwingPopupMenu.Click(0)
 
 dumpAllProperties(ordersMenu2)
 //dumpAllChildren(frame)
 
// Log.Message("child count: " + panel.SwingObject("JPopupMenu", "", -1).SwingPopupMenu)
  //Log.Message("child count: " + panel.ChildCount)

 //ordersMenu.SubMenu.Click(0)
 
 

}


function dumpAllProperties(obj) {
  props = aqObject.GetProperties(obj);
    while (props.HasNext())
    {
      prop = props.Next();
  
      Log.Message (prop.Name + ": " + aqConvert.VarToStr(prop.Value));
    }
}

function dumpAllChildren(parent) {
   for (var i=0; i<parent.ChildCount ; i++) {
   
     var child = parent.Child(i);
     Log.Message("child: " + i + " className: " + child.JavaClassName + ", fullName: " + child.FullName)
     
     
     if (child.SwingPopupMenu != null) {
       Log.Message("----------");
     }
     
     if (child.ChildCount > 0) {
       dumpAllChildren(child);
     }
}
 
}
