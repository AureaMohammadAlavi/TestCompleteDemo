﻿


function Test2()
{
  Aliases.javaw.JfrmMain.Activate()
  LLCollection1.LLP1.Execute(Aliases.javaw.JfrmMain.RootPane.null_layeredPane.MenuBar.Menu);
  let panel = Aliases.javaw.JdlgOrders.RootPane.null_layeredPane.null_contentPane.jpnMain;
  panel.jcbProduct.setSelectedItem("FamilyAlbum");
  let formattedTextField = panel.jspQuantity.Spinner_NumberEditor.Spinner_formattedTextField;
  formattedTextField.DblClick(29, 6);
  formattedTextField.Keys("10[Tab]");
  let panel2 = panel.jpnCustomer;
  let textField = panel2.jtfName;
  textField.Click(48, 11);
  textField.Keys("Mohammad[Tab]");
  panel2.jtfStreet.Keys("Street[Tab]");
  panel2.jtfCity.Keys("city[Tab]");
  panel2.jtfState.Keys("state[Tab]");
  panel2.jtfZip.Keys("12312");
  panel2.jrbMaster.ClickButton();
  textField = panel2.jtfCardNumber;
  textField.Click(113, 15);
  textField.Keys("123456789");
  panel.jbtOk.ClickButton();
  Tables.Table.Check();
}