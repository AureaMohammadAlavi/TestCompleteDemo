function Test1()
{
  


  TestedApps.Orders_Desktop.Run(1, true);
  let orders = Aliases.Orders;
  let mainForm = orders.MainForm;
  mainForm.Maximize();
  
  var driver = DDT.ExcelDriver("C:\\Users\\Public\\Documents\\TestComplete 14 Samples\\Common\\Data-Driven Testing\\TestBook.xlsx", "TestSheet", true)
  
  while(!driver.EOF()) {
 mainForm.MainMenu.Click("Orders|New order...");
  let orderForm = orders.OrderForm;
  let groupBox = orderForm.Group;
  let numericUpDown = groupBox.Quantity;

   let toolBar = mainForm.ToolBar;

 
   populate_order_form(numericUpDown, groupBox, driver);
   checkpoint(groupBox, driver);
  
   close_order_form(orderForm, orders, toolBar);
   driver.Next();
 
  }
    close_main_form(mainForm, orders) ;   

  
}


function close_main_form(mainForm, orders) {
    
  mainForm.Close();
    let dlgConfirmation = orders.dlgConfirmation;
  dlgConfirmation.btnNo.ClickButton();
}

function close_order_form(orderForm, orders, toolBar) {
  orderForm.ButtonOK.ClickButton();
  
  toolBar.ClickItem(6, false);
  let dlgConfirmation = orders.dlgConfirmation;
  dlgConfirmation.btnYes.ClickButton();
}



function populate_order_form(numericUpDown, groupBox, driver) {
  
  numericUpDown.wValue = driver.Value(2);
  let Price = groupBox.Price;
  Price.Click(41, 9);
  Price.SetText(driver.Value(11));

  let Discount = groupBox.Discount;
  Discount.SetText("10%");
  
  
  let ProductNames = groupBox.ProductNames
  ProductNames.ClickItem(driver.Value(1));
  
 
  let Customer = groupBox.Customer;
  Customer.Click(99, 8);
  Customer.SetText(driver.Value(0));
 
  
  let Street = groupBox.Street;
  Street.SetText(driver.Value(4));
 
  
  City = groupBox.City;
  City.SetText(driver.Value(5));
 
  
  State = groupBox.State;
  State.SetText(driver.Value(6));
  
  
  Zip = groupBox.Zip;
  Zip.SetText(driver.Value(7));
 
  
  groupBox.WinFormsObject(driver.Value(8)).ClickButton();
  CardNo = groupBox.CardNo;
  CardNo.Click(47, 10);
  CardNo.SetText(driver.Value(9));
  groupBox.ExpDate.wDate = driver.Value(10);
  groupBox.Date.wDate = driver.Value(3);
  
}

function checkpoint(groupBox, driver) {
  let Total = groupBox.groupBox1.Total;
   let Discount = groupBox.Discount;
  
    aqObject.CheckProperty(Total, "wText", cmpEqual, driver.Value(13));
    aqObject.CheckProperty(Discount, "wText", cmpEqual, driver.Value(12));
}