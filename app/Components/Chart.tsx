import React, { useEffect } from 'react';
import { ChartConfiguration, Chart } from 'chart.js/auto';

const SalesChart: React.FC = () => {
  useEffect(() => {
    const config: ChartConfiguration<'line'> = {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: new Date().getFullYear().toString(),
            backgroundColor: "orange",
            borderColor: "pink",
            data: [65, 78, 66, 44, 56, 67, 75],
            fill: false,
          },
          {
            label: (new Date().getFullYear() - 1).toString(),
            fill: false,
            backgroundColor: "#894647",
            borderColor: "#ff6901",
            data: [40, 68, 86, 74, 56, 60, 87],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          title: {
            display: false,
          },
          legend: {
            display: true,
            position: "bottom",
          },
        },
        scales: {
          x: {
            ticks: {
              color: "white",
            },
            title: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              color: "white",
            },
            title: {
              display: false,
            },
            grid: {
              color: "white",
            },
          },
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
      },
    };
    const ctx = document.getElementById("line-chart") as HTMLCanvasElement | null;
    if (ctx) {
      const myLine = new Chart(ctx, config);
      return () => {
        myLine.destroy();
      };
    }
  }, []);

  return (
    <canvas id="line-chart" className="md:w-full md:h-full h-60 text-white "></canvas>
  );
};

export default SalesChart;
