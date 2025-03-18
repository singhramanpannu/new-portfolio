import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Sipping Tea', 'React', 'JS', 'AEM', 'Sleeping'],
  datasets: [
    {
      label: 'Skill Level',
      data: [95, 80, 90, 70, 60],
      backgroundColor: ['#FFB703', '#219EBC', '#FB8500', '#8E44AD', '#2ECC71'], // More vibrant but balanced colors
      borderRadius: 8,
      barThickness: 100, // Wider bars for better visibility
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // Allows us to control height properly
  plugins: {
    legend: { display: false }, // Hides unnecessary legend
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { font: { size: 16 }, color: '#333' }, // Slightly bigger x-axis labels
    },
    y: {
      beginAtZero: true,
      max: 100,
      ticks: { stepSize: 20, font: { size: 14 }, color: '#555' },
      grid: { color: '#E5E7EB' }, // Softer grid lines
    },
  },
};

export default function SkillGraph() {
  return (
    <div className='w-[100%] border-t-2'><div className="max-w-5xl  mx-auto px-6 py-20"> {/* Added padding to avoid footer clash */}
    <h2 className="text-6xl font-bold text-center mb-10 text-gray-800">I am good at these....</h2>
    <div className="bg-white shadow-xl rounded-2xl p-8">
      <div className="h-[400px]"> {/* Bigger graph */}
        <Bar data={data} options={options} />
      </div>
    </div>
  </div></div>
  );
}
