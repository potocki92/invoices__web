"use strict";

import users from "./invoices_db.json" assert { type: "json" };

console.log(users);

const button = document.getElementById("button");
button.addEventListener("click", function () {
  // const myObject = JSON.parse(data.toString());

  // // Adding the new data to our object
  // var newInvoice = {

  // }
  // myObject.push(newInvoice);
  // console.log("newData:", newInvoice);
  // console.log("myObject:", myObject);
  // // Writing to our JSON file
  // var newData2 = JSON.stringify(myObject);
  // fs.writeFile("public/js/invoices_db.json", newData2, (err) => {
  //   // Error checking
  //   if (err) throw err;
  //   console.log("New data added");
  // });

  console.log("click");
});
