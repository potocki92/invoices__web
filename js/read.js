const fs = require("fs");

const data = fs.readFileSync("js/invoices_db.json");

const myObject = JSON.parse(data.toString());

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
let newData = new Invoices(
  "2022-12-06",
  "2022-12-06",
  "2022-12-06",
  "transfer",
  "2022-12-06"
);

// Adding the new data to our object
myObject.push(newData);
console.log(myObject);
// Writing to our JSON file
var newData2 = JSON.stringify(myObject);
fs.writeFile("js/invoices_db.json", newData2, (err) => {
  // Error checking
  if (err) throw err;
  console.log("New data added");
});
