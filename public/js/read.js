import { Invoices } from "./invoices.js";

// GET VALUE AND ID FROM INPUT WHEN USER TYPING
//
if (typeof window !== "undefined") {
  /* 
    eliminates **ReferenceError: window is not defined** from termianl "Node.js" 
  */
  window.onkeyup = keyup;
}
const newInvoice = new Invoices();

var inputTextValue;
var getInputId;

var arr = getKeys(newInvoice);

// GET KEYS FROM DATABASE
function getKeys(data) {
  return Object.entries(data).reduce((r, [key, value]) => {
    r.push(key);
    if (typeof value == "object") r.push(getKeys(value));
    return r;
  }, []);
}
console.log("klucze:", arr);

function keyup(e) {
  inputTextValue = e.target.value;
  getInputId = document.activeElement.id;

  arr.forEach((item) => items(item, getInputId));

  function items(keyFromData, idFromInput) {
    if (keyFromData === idFromInput) {
      console.log("items:", keyFromData, "getInputID:", idFromInput);
      newInvoice[keyFromData] = inputTextValue;
      console.log("into items function: ", newInvoice);
    }
  }

  console.log(inputTextValue, getInputId);
}
console.log("after keyup: ", newInvoice);

// LOAD JSON AND SAVE TO NEW OBJECT TO STRING
// NEXT PUSH NEW DATA TO NEW CREATED OBJECT
// NEXT SAVE TO JSON FILE FROM NEW CREATED OBJECT
// SAVE NEW JSON FILE TO ORYGINAL JSON FILE
