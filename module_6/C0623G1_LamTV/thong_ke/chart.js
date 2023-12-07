const data = {
  labels: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  datasets: [
    {
      label: "Doanh Thu",
      data: [370, 90, 120, 100, 20, 80, 170, 90, 80, 40, 30, 80],
      backgroundColor: ["#4bc0c0"],
      borderColor: "#4bc0c0",
      tension: 0.3,
      fill: false,
    },
    {
      label: "Tổng Chi",
      data: [300, 170, 190, 70, 40, 90, 20, 90, 10, 40, 60, 90],
      backgroundColor: ["#ff6384"],
      borderColor: "#ff6384",
      tension: 0.3,
      fill: false,
    },
    {
      label: "Lợi Nhuận",
      data: [210, 230, 70, 90, 80, 120, 40, 90, 10, 80, 20, 70],
      backgroundColor: ["#ffcd56"],
      borderColor: "#ffcd56",
      tension: 0.3,
      fill: false,
    },
  ],
};


const config = {
  type: "line",
  data: data,
  options: {
    plugins: {
      legend: {
        title: {
          display: true,
          text: "Tháng 01/2023 - Tháng 12/2023 "
        },
      },
    },
  },
};

const canvas = document.getElementById("canvas");
const chart = new Chart(canvas, config);
