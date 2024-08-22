import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Transactions = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    bank: "",
    category: "",
    recipient: "",
    note: "",
    amount: "",
    date: null,
  });

  const data = [
    {
      bank: "Union",
      category: "Servicing",
      recipient: "Meghan and Dans",
      note: "Car Service",
      amount: "-$1850",
      date: new Date("2024-07-15"), // Example date
    },
    {
      bank: "Axis",
      category: "Mortgage",
      recipient: "Collins and San",
      note: "Deposit",
      amount: "-$3250",
      date: new Date("2024-08-05"), // Example date
    },
    // Add more records here
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleRowClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleCloseDialog = () => {
    setSelectedTransaction(null);
  };

  const handleAddTransactionClick = () => {
    setIsAddDialogOpen(true);
  };

  const handleAddTransactionClose = () => {
    setIsAddDialogOpen(false);
    setNewTransaction({
      bank: "",
      category: "",
      recipient: "",
      note: "",
      amount: "",
      date: null,
    });
  };

  const handleNewTransactionChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setNewTransaction({ ...newTransaction, date });
  };

  const handleAddTransaction = () => {
    // Here, you can add the logic to save the new transaction to the database
    // For now, let's log it and close the dialog
    console.log("New Transaction:", newTransaction);
    handleAddTransactionClose();
  };

  // Filter data based on search query, selected category, and date range
  const filteredData = data.filter((transaction) => {
    const matchesSearch =
      transaction.bank.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.recipient.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.note.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.amount.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || transaction.category === selectedCategory;

    const matchesDateRange =
      (!startDate || transaction.date >= startDate) &&
      (!endDate || transaction.date <= endDate);

    return matchesSearch && matchesCategory && matchesDateRange;
  });

  return (
    <div className="p-4">
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="mb-4 md:mb-0 md:w-1/2"
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="md:w-1/4 p-2 border rounded mb-4 md:mb-0 dark:bg-transparent dark:text-blue-400"
        >
          <option value="All">All Categories</option>
          <option value="Servicing">Servicing</option>
          <option value="Mortgage">Mortgage</option>
          <option value="Transportation">Transportation</option>
          {/* Add more categories as needed */}
        </select>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            placeholderText="Start Date"
            className="p-2 border rounded bg-transparent"
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            placeholderText="End Date"
            className="p-2 border rounded bg-transparent"
            dateFormat="MM/yyyy"
            showMonthYearPicker
          />
        </div>
      </div>

      <div>
        <Button onClick={handleAddTransactionClick}>Add Transaction</Button>
      </div>

      <div className="md:p-5 p-2">
        <Table>
          <TableCaption>A list of your transactions.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Bank</TableHead>
              <TableHead className="w-[100px] md:text-center">
                Category
              </TableHead>
              <TableHead className="md:text-center">Recipient</TableHead>
              <TableHead className="md:text-center">Note</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((transaction, index) => (
              <TableRow
                key={index}
                onClick={() => handleRowClick(transaction)}
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
              >
                <TableCell>{transaction.bank}</TableCell>
                <TableCell className="md:text-center">
                  {transaction.category}
                </TableCell>
                <TableCell className="md:text-center">
                  {transaction.recipient}
                </TableCell>
                <TableCell className="md:text-center">
                  {transaction.note}
                </TableCell>
                <TableCell className="text-right">
                  {transaction.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedTransaction && (
        <Dialog
          open={Boolean(selectedTransaction)}
          onOpenChange={handleCloseDialog}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-xl">Transaction Details</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <p>
                <strong>Bank:</strong> {selectedTransaction.bank}
              </p>
              <p>
                <strong>Category:</strong> {selectedTransaction.category}
              </p>
              <p>
                <strong>Recipient:</strong> {selectedTransaction.recipient}
              </p>
              <p>
                <strong>Note:</strong> {selectedTransaction.note}
              </p>
              <p>
                <strong>Amount:</strong> {selectedTransaction.amount}
              </p>
            </DialogDescription>
            <DialogFooter>
              <Button
                type="button"
                onClick={() => {
                  /* Handle delete */
                }}
              >
                Delete transaction
              </Button>
              <Button type="button" onClick={handleCloseDialog}>
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      <Dialog open={isAddDialogOpen} onOpenChange={handleAddTransactionClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Transaction</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            <div className="space-y-4">
              <Input
                type="text"
                name="bank"
                placeholder="Bank Name"
                value={newTransaction.bank}
                onChange={handleNewTransactionChange}
              />
              <Input
                type="text"
                name="category"
                placeholder="Category"
                value={newTransaction.category}
                onChange={handleNewTransactionChange}
              />
              <Input
                type="text"
                name="recipient"
                placeholder="Recipient"
                value={newTransaction.recipient}
                onChange={handleNewTransactionChange}
              />
              <Input
                type="text"
                name="note"
                placeholder="Note"
                value={newTransaction.note}
                onChange={handleNewTransactionChange}
              />
              <Input
                type="text"
                name="amount"
                placeholder="Amount"
                value={newTransaction.amount}
                onChange={handleNewTransactionChange}
              />
              <DatePicker
                selected={newTransaction.date}
                onChange={handleDateChange}
                placeholderText="Transaction Date"
                className="p-2 border rounded w-full"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </DialogDescription>
          <DialogFooter>
            <Button onClick={handleAddTransactionClose}>Cancel</Button>
            <Button onClick={handleAddTransaction}>Add</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Transactions;
