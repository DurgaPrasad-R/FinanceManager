import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  Bus,
  Wallet,
  HousePlus,
  HandCoins,
  Cookie,
  ShieldMinus,
  Clapperboard,
} from "lucide-react";

const Goals = () => {
  return (
    <div className="px-10">
      <div>
        <div className="font-bold text-xl p-2">Create a new Category</div>
        <div className="flex-col md:flex md:flex-row gap-10 px-4 items-center">
          <div>
            <Label htmlFor="email">Icon</Label>
            <Select>
              <SelectTrigger className="w-20">
                <SelectValue placeholder="Icon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="x">
                  <Bus />
                </SelectItem>
                <SelectItem value="y">
                  <Bus />
                </SelectItem>
                <SelectItem value="z">
                  <Bus />
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" placeholder="Type here" />
          </div>
          <div>
            <Label htmlFor="type">Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Expense" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="expense">Expense</SelectItem>
                <SelectItem value="savings">Savings</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="h-10 m-2">Create Category</Button>
        </div>
      </div>
      <hr className="m-4" />
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full">
          <div className="font-bold m-2">Income</div>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <Wallet />
                </TableCell>
                <TableCell>Salary</TableCell>
                <TableCell className="text-right">46 Transactions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <HousePlus />
                </TableCell>
                <TableCell>Rental</TableCell>
                <TableCell className="text-right">46 Transactions</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="bg-[#e6e6e6] rounded-md w-[0.05rem]" />
        <div className="w-full">
          <div className="font-bold m-2">Expenses</div>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <HandCoins />
                </TableCell>
                <TableCell>Mortgage</TableCell>
                <TableCell className="text-right">46 Transactions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Bus />
                </TableCell>
                <TableCell>Transport</TableCell>
                <TableCell className="text-right">46 Transactions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Cookie />
                </TableCell>
                <TableCell>Food</TableCell>
                <TableCell className="text-right">46 Transactions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <ShieldMinus />
                </TableCell>
                <TableCell>Miscellaneous</TableCell>
                <TableCell className="text-right">46 Transactions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Clapperboard />
                </TableCell>
                <TableCell>Entertainment</TableCell>
                <TableCell className="text-right">46 Transactions</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <HandCoins />
                </TableCell>
                <TableCell>Mortgage</TableCell>
                <TableCell className="text-right">46 Transactions</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Goals;
