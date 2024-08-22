import PieChartComponent from "./PieChart";
import BarChartComponent from "./BarChartComponent";
import AreaCharComponent from "./AreaChartComponent";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  return (
    <div className="">
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
      <div className="flex flex-col mt-6 gap-10 justify-center md:flex-row p-2">
        <BarChartComponent />
        <PieChartComponent />
      </div>
    </div>
  );
};

export default Home;

// <div className="flex flex-col gap-10 justify-center md:flex-row p-2">
// <PieChartComponent />
// <PieChartComponent />
// </div>
