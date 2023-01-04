export class Invoices {
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
