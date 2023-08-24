'use client'
import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Activity chart',
    },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const dataset1Data = [500, 800, 1200, 600, 1500, 1000, 300, 700, 1100, 900]
const dataset2Data = [200, 400, 1000, 300, 1800, 600, 1400, 800, 1300, 500]
const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: dataset1Data,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.4,
    },
    {
      label: 'Dataset 2',
      data: dataset2Data,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.4,
    },
  ],
}

function LineChart() {
  return (
    <div className='col-span-12 mt-5'>
      <div className='grid gap-2 grid-cols-1 lg:grid-cols-1'>
        <div className='bg-white p-4 shadow-sm rounded-2xl'>
          <h1 className='font-bold text-base'>Activity</h1>
          <div className=' flex flex-col mt-4  overflow-x-auto overflow-auto  sm:rounded-lg  py-2 align-middle  w-full'>
            <Line
              options={options}
              data={data}
              height={window.innerWidth > 620 ? 50 : window.innerHeight * 0.4}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineChart
