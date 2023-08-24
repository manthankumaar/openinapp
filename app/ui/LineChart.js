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
import faker from '@faker-js/faker'

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

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.floor(Math.random() * 2000) - 1000),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random() * 2000) - 1000),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

function LineChart() {
  return (
    <div className='col-span-12 mt-5'>
      <div className='grid gap-2 grid-cols-1 lg:grid-cols-1'>
        <div className='bg-white p-4 shadow-sm rounded-2xl'>
          <h1 className='font-bold text-base'>Activity</h1>
          <div className=' flex flex-col mt-4 -my-2 overflow-x-auto overflow-auto  sm:rounded-lg  py-2 align-middle min-w-full w-full'>
            <Line options={options} data={data} height={50} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineChart
