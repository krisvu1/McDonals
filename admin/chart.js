const labels = [
  'Tháng một',
  'Tháng hai',
  'Tháng ba',
  'Tháng tư',
  'Tháng năm',
  'Tháng sáu',
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Lượng người truy cập',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 35, 20, 40, 20, 24, 30, 45],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {}
};



const myChart = new Chart(
  document.getElementById('myChart'),
  config
);