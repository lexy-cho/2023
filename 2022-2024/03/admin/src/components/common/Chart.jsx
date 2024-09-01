import '@toast-ui/chart/dist/toastui-chart.min.css';
import { BarChart, LineChart, PieChart } from '@toast-ui/react-chart';
import { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const Chart = ({ width = 600, height = 400 }) => {
  const chartRef = useRef(null);

  const [chartSize, setChartSize] = useState({ width: width, height: height });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setChartSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  const Line = ({ data, options, containerStyle }) => {
    return <LineChart data={data} options={options} style={{ flex: [1, 1, '40%'] }} />;
  };

  const data = {
    categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    series: [
      {
        name: 'Series1',
        data: [800000000, 820000000, 810000000, 830000000, 820000000, 840000000, 830000000, 820000000, 810000000, 800000000, 820000000, 810000000],
      },
      {
        name: 'Series2',
        data: [600000000, 500000000, 550000000, 580000000, 590000000, 600000000, 610000000, 620000000, 450000000, 600000000, 500000000, 550000000],
      },
      {
        name: 'Series3',
        data: [100000000, 200000000, 300000000, 350000000, 330000000, 320000000, 300000000, 310000000, 290000000, 100000000, 200000000, 300000000],
      },
    ],
  };

  const options = {
    chart: { width: '100%', height: '100%' },
    xAxis: { title: '월' },
    yAxis: { title: '건수' },
    series: {
      showDot: true,
      spline: true,
    },
    tooltip: {
      formatter: (value) => `${value.toLocaleString()} 건`,
    },
    legend: {
      align: 'bottom',
    },
  };

  //   return <LineChart data={data} options={{ ...options, chart: chartSize }} style={{ flex: [1, 1, '40%'] }} />;
  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }}>
      <LineChart data={data} options={{ ...options, chart: chartSize }} style={{ flex: '1 1 40%' }} />
    </div>
  );
};

export const DonutChart = ({ width = 600, height = 400 }) => {
  const chartRef = useRef(null);

  const [chartSize, setChartSize] = useState({ width: width, height: height });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setChartSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    // if (chartRef.current) {
    //   const centerText = document.createElement('div');
    //   centerText.style.position = 'absolute';
    //   centerText.style.top = '50%';
    //   centerText.style.left = '50%';
    //   centerText.style.transform = 'translate(-50%, -50%)';
    //   centerText.style.fontSize = '24px';
    //   centerText.style.fontWeight = 'bold';
    //   centerText.innerText = '총 341';
    //   console.log(chartRef.current);
    //   console.log(chartRef.current.el);
    //   chartRef.current.appendChild(centerText);
    // }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  const data = {
    categories: ['Browser'],

    series: [
      { name: 'DB', data: 231, color: '#ff6384' },
      { name: 'Agoda', data: 231, color: '#36a2eb' },
      { name: 'TRIP', data: 231, color: '#ff9f40' },
      { name: '야놀자', data: 231, color: '#4bc0c0' },
      { name: 'PMS', data: 231, color: '#ff66b2' },
    ],
  };
  const options = {
    chart: { title: 'Usage share of web browsers', width: 600, height: 400 },
    series: {
      radiusRange: {
        inner: '70%',
        outer: '100%',
      },
    },
  };
  return (
    <div ref={chartRef} style={{ width: '100%', height: '100%' }}>
      <PieChart data={data} options={{ ...options, chart: chartSize }} style={{ flex: '1 1 40%' }} />
    </div>
  );
  //   return <PieChart data={data} options={options} />;
};

export default Chart;
