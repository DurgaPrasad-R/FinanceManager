import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Transactions = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:justify-evenly">
        <Card className="w-80">
          <CardHeader>
            <CardTitle className="text-md">Earnings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$45678.50</p>
          </CardContent>
          <CardFooter>
            <CardDescription>+20% month over month</CardDescription>
          </CardFooter>
        </Card>
        <Card className="w-80">
          <CardHeader>
            <CardTitle className="text-md">No. of Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">2450</p>
          </CardContent>
          <CardFooter>
            <CardDescription>+33% month over month</CardDescription>
          </CardFooter>
        </Card>
        <Card className="w-80">
          <CardHeader>
            <CardTitle className="text-md">Title</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">10353</p>
          </CardContent>
          <CardFooter>
            <CardDescription>-8% month over month</CardDescription>
          </CardFooter>
        </Card>
      </div>
      <div className="md:p-10 p-2">
        <Table>
          <TableCaption>A list of your transactions.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] md:text-center">
                Category
              </TableHead>
              <TableHead className="md:text-center">Recipient</TableHead>
              <TableHead className="md:text-center">Note</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium md:text-center">
                Transportation
              </TableCell>
              <TableCell className="md:text-center">Collins and Sans</TableCell>
              <TableCell className="text-center">Deposit</TableCell>
              <TableCell className="text-right">-$3650</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium md:text-center">
                Transportation
              </TableCell>
              <TableCell className="md:text-center">Collins and Sans</TableCell>
              <TableCell className="text-center">Deposit</TableCell>
              <TableCell className="text-right">-$3650</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium md:text-center">
                Transportation
              </TableCell>
              <TableCell className="md:text-center">Collins and Sans</TableCell>
              <TableCell className="text-center">Deposit</TableCell>
              <TableCell className="text-right">-$3650</TableCell>
            </TableRow>
          </TableBody>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium md:text-center">
                Transportation
              </TableCell>
              <TableCell className="md:text-center">Collins and Sans</TableCell>
              <TableCell className="text-center">Deposit</TableCell>
              <TableCell className="text-right">-$3650</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Transactions;
