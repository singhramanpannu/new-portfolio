import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Sipping Tea', 'React', 'JS', 'AEM', 'Sleeping'],
  datasets: [
    {
      label: 'Skill Level',
      data: [95, 80, 90, 70, 60],
      backgroundColor: ['#FFB703', '#219EBC', '#FB8500', '#8E44AD', '#2ECC71'],
      borderRadius: 12,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#111827',
      titleFont: { size: 16 },
      bodyFont: { size: 14 },
      padding: 12,
      cornerRadius: 6,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        font: { size: 14, weight: '600' },
        color: '#374151',
      },
    },
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 20,
        font: { size: 13 },
        color: '#6B7280',
      },
      grid: {
        color: '#E5E7EB',
        drawBorder: false,
      },
    },
  },
};

export default function SkillGraph() {
  return (
    <section className="w-full border-t border-gray-200 bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          I’m Good At These...
        </h2>
        <p className="text-gray-500 text-lg sm:text-xl mb-12">
          A little visual flex of what I bring to the table 👇
        </p>

        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 transition-all">
          <div className="relative" style={{ minHeight: "clamp(300px, 40vw, 500px)" }}>
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
}
