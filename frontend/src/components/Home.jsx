import PieChartComponent from "./PieChart";
import BarChartComponent from "./BarChartComponent";
import AreaCharComponent from "./AreaChartComponent";

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-10 justify-center md:flex-row p-2">
        <BarChartComponent />
        <AreaCharComponent />
      </div>
      <div className="flex flex-col gap-10 justify-center md:flex-row p-2">
        <PieChartComponent />
        <PieChartComponent />
      </div>
    </div>
  );
};

export default Home;
