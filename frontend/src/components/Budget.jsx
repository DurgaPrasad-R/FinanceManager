import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Trash, Pencil } from "lucide-react";
import { useState } from "react";

const Budget = () => {
  const [accounts, setAccounts] = useState([
    { accountNo: "100022000131", name: "Axis", balance: "$25000" },
    { accountNo: "100022000133", name: "Union", balance: "$15000" },
  ]);

  const [newAccount, setNewAccount] = useState({
    accountNo: "",
    balance: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewAccount({ ...newAccount, [id]: value });
  };

  const handleSave = () => {
    if (newAccount.accountNo && newAccount.balance) {
      setAccounts([...accounts, newAccount]);
      setNewAccount({ accountNo: "", balance: "" });
    }
  };

  const handleEdit = (index, updatedAccount) => {
    const updatedAccounts = [...accounts];
    updatedAccounts[index] = updatedAccount;
    setAccounts(updatedAccounts);
  };

  const handleDelete = (index) => {
    const updatedAccounts = accounts.filter((_, i) => i !== index);
    setAccounts(updatedAccounts);
  };

  return (
    <div className="h-custom-height">
      <Card className="p-1">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div>Bank Accounts</div>
            <Dialog>
              <DialogTrigger>
                <Button>Add</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add your bank account</DialogTitle>
                  <DialogDescription>
                    Add a bank account here. Click save when you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Account No.
                    </Label>
                    <Input
                      id="accountNo"
                      value={newAccount.accountNo}
                      onChange={handleChange}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="balance" className="text-right">
                      Balance
                    </Label>
                    <Input
                      id="balance"
                      value={newAccount.balance}
                      onChange={handleChange}
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" onClick={handleSave}>
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardTitle>
        </CardHeader>
        <Table>
          <TableCaption>A list of your bank accounts.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Account Number</TableHead>
              <TableHead>Balance</TableHead>
              <TableHead className="text-right">Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {accounts.map((account, index) => (
              <TableRow key={index}>
                <TableCell>{account.name}</TableCell>
                <TableCell className="font-medium">
                  {account.accountNo}
                </TableCell>
                <TableCell>{account.balance}</TableCell>
                <TableCell className="float-right">
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger>
                        <Pencil />
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit your bank account</DialogTitle>
                          <DialogDescription>
                            Make changes to your bank account here. Click save
                            when you&apos;re done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="accountNo" className="text-right">
                              Account No.
                            </Label>
                            <Input
                              id="accountNo"
                              value={account.accountNo}
                              className="col-span-3"
                              onChange={(e) =>
                                handleEdit(index, {
                                  ...account,
                                  accountNo: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="balance" className="text-right">
                              Balance
                            </Label>
                            <Input
                              id="balance"
                              value={account.balance}
                              className="col-span-3"
                              onChange={(e) =>
                                handleEdit(index, {
                                  ...account,
                                  balance: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            type="submit"
                            onClick={() => handleEdit(index, account)}
                          >
                            Save changes
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <Trash />
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(index)}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Budget;
