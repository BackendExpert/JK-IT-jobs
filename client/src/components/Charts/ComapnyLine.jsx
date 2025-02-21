import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ComapnyLine = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 15, 25, 30, 40],
        borderColor: "#0f5a97",
        backgroundColor: "#0f5a97",
        tension: 0.4,
      },
      {
        label: "Dataset 2",
        data: [5, 15, 80, 20, 25, 35],
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.3)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="xl:w-[700px] mx:w-full md:block hidden h-full bg-white p-4 shadow-lg rounded-lg">
      <Line data={data} options={options} />
    </div>
  );
};

export default ComapnyLine;
