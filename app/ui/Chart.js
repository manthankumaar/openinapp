'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
  datasets: [
    {
      data: [55, 31, 14],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
  options: {
    title: {
      dispaly: true,
      text: 'Top Brands',
    },
    responive: true,
  },
}
const Chart = () => {
  return (
    <div className='col-span-12 mt-5'>
      <div className='grid gap-2 grid-cols-1 lg:grid-cols-2'>
        <div className='bg-white flex items-center justify-center shadow-sm p-4 max-h-96  rounded-2xl'>
          <Pie data={data} />;
        </div>
        <div className='bg-white shadow-sm p-4 rounded-2xl'>
          <h1 className='font-bold text-base'>Schedule</h1>
          <div className='mt-4'>
            <div className='flex h-auto p-2'>
              <div className='bg-[#9BDD7C] w-1'></div>
              <div className='p-2'>
                <p>Meeting with suppliers from Kuta Bali</p>
                <p className='text-[#858585]'>14.00-15.00</p>
                <p className='text-[#858585]'>at Sunset Road, Kuta Bali</p>
              </div>
            </div>
            <div className='flex h-auto p-2'>
              <div className='bg-[#6972C3] w-1'></div>
              <div className='p-2'>
                <p>Meeting with suppliers from Kuta Bali</p>
                <p className='text-[#858585]'>14.00-15.00</p>
                <p className='text-[#858585]'>at Sunset Road, Kuta Bali</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart
