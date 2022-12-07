class Invoices {
  constructor(
    invoicesNumber,
    invoicesDateOfIssue,
    invoicesSaleDate,
    invoicesMethodOfPayment,
    invoicesPaymentDeadline
  ) {
    this.invoicesNumber = invoicesNumber;
    this.invoicesDateOfIssue = invoicesDateOfIssue;
    this.invoicesSaleDate = invoicesSaleDate;
    this.invoicesMethodOfPayment = invoicesMethodOfPayment;
    this.invoicesPaymentDeadline = invoicesPaymentDeadline;
  }
}

// GET VALUE AND ID FROM INPUT WHEN USER TYPING
//
if (typeof window !== "undefined") {
  /* 
    eliminates **ReferenceError: window is not defined** from termianl "Node.js" 
  */
  window.onkeyup = keyup;
}
let newData = new Invoices();

var inputTextValue;
var getInputId;

var arr = getKeys(newData);
console.log("klucze:", arr);

const newInvoice = new Invoices();
function keyup(e) {
  inputTextValue = e.target.value;
  getInputId = document.activeElement.id;

  arr.forEach((item) => items(item, getInputId));

  function items(keyFromData, b) {
    if (keyFromData === b) {
      console.log("items:", keyFromData, "getInputID:", b);
      console.log(newInvoice.hasOwnProperty(keyFromData));
      console.log((newInvoice[keyFromData] = inputTextValue));
      console.log(newInvoice);
    }
  }

  console.log(inputTextValue, getInputId);
}

// LOAD JSON AND SAVE TO NEW OBJECT TO STRING
// NEXT PUSH NEW DATA TO NEW CREATED OBJECT
// NEXT SAVE TO JSON FILE FROM NEW CREATED OBJECT
// SAVE NEW JSON FILE TO ORYGINAL JSON FILE

const fs = require("fs");
const data = fs.readFileSync("js/invoices_db.json");

const myObject = JSON.parse(data.toString());

// Adding the new data to our object
myObject.push(newInvoice);
console.log("newData:", newInvoice);
console.log("myObject:", myObject);
// Writing to our JSON file
var newData2 = JSON.stringify(myObject);
fs.writeFile("js/invoices_db.json", newData2, (err) => {
  // Error checking
  if (err) throw err;
  console.log("New data added");
});

// GET KEYS FROM DATABASE
function getKeys(data) {
  return Object.entries(data).reduce((r, [key, value]) => {
    r.push(key);
    if (typeof value == "object") r.push(getKeys(value));
    return r;
  }, []);
}
