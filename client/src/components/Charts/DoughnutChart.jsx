import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ["Remote", "Hybrid", "OnSite", "Contract"],
    datasets: [
      {
        label: "Job Types",
        data: [40, 15, 30, 10], // Example data
        backgroundColor: ["#3b82f6", "#f59e0b", "#ef4444", "#22c55e"], // Tailwind colors
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="w-full h-full bg-white p-4 shadow-lg rounded-lg">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
