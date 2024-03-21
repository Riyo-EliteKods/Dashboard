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


// import {
//   Card,
//   CardBody,
//   CardHeader,
//   Typography,
// } from "@material-tailwind/react";
// import Chart from "react-apexcharts";
// //   import { Square3Stack3DIcon } from "@heroicons/react/24/outline";

// interface ChartConfig {
//   type: string;
//   height: number;
//   series: { name: string; data: number[] }[];
//   options: {
//     chart: {
//       toolbar: {
//         show: boolean;
//       };
//     };
//     title: {
//       show: boolean;
//     };
//     dataLabels: {
//       enabled: boolean;
//     };
//     colors: string[];
//     stroke: {
//       lineCap: string;
//       curve: string;
//     };
//     markers: {
//       size: number;
//     };
//     xaxis: {
//       axisTicks: {
//         show: boolean;
//       };
//       axisBorder: {
//         show: boolean;
//       };
//       labels: {
//         style: {
//           colors: string;
//           fontSize: string;
//           fontFamily: string;
//           fontWeight: number;
//         };
//       };
//       categories: string[];
//     };
//     yaxis: {
//       labels: {
//         style: {
//           colors: string;
//           fontSize: string;
//           fontFamily: string;
//           fontWeight: number;
//         };
//       };
//     };
//     grid: {
//       show: boolean;
//       borderColor: string;
//       strokeDashArray: number;
//       xaxis: {
//         lines: {
//           show: boolean;
//         };
//       };
//       padding: {
//         top: number;
//         right: number;
//       };
//     };
//     fill: {
//       opacity: number;
//     };
//     tooltip: {
//       theme: string;
//     };
//   };
// }

// const chartConfig: ChartConfig = {
//   type: "line",
//   height: 240,
//   series: [
//     {
//       name: "Sales",
//       data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
//     },
//   ],
//   options: {
//     chart: {
//       toolbar: {
//         show: false,
//       },
//     },
//     title: {
//       show: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     colors: ["#020617"],
//     stroke: {
//       lineCap: "round",
//       curve: "smooth",
//     },
//     markers: {
//       size: 0,
//     },
//     xaxis: {
//       axisTicks: {
//         show: false,
//       },
//       axisBorder: {
//         show: false,
//       },
//       labels: {
//         style: {
//           colors: "#616161",
//           fontSize: "12px",
//           fontFamily: "inherit",
//           fontWeight: 400,
//         },
//       },
//       categories: [
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//     },
//     yaxis: {
//       labels: {
//         style: {
//           colors: "#616161",
//           fontSize: "12px",
//           fontFamily: "inherit",
//           fontWeight: 400,
//         },
//       },
//     },
//     grid: {
//       show: true,
//       borderColor: "#dddddd",
//       strokeDashArray: 5,
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//       padding: {
//         top: 5,
//         right: 20,
//       },
//     },
//     fill: {
//       opacity: 0.8,
//     },
//     tooltip: {
//       theme: "dark",
//     },
//   },
// };

// const Charts = () => {
//   return (
//     <div>
//       <Card>
//         <CardHeader
//           floated={false}
//           shadow={false}
//           color="transparent"
//           className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
//         >
//           <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
//             {/* <Square3Stack3DIcon className="h-6 w-6" /> */}
//           </div>
//           <div>
//             <Typography variant="h6" color="blue-gray">
//               Line Chart
//             </Typography>
//             <Typography
//               variant="small"
//               color="gray"
//               className="max-w-sm font-normal"
//             >
//               Visualize your data in a simple way using the
//               @material-tailwind/react chart plugin.
//             </Typography>
//           </div>
//         </CardHeader>
//         <CardBody className="px-2 pb-0">
//           <Chart {...chartConfig} />
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Charts;
