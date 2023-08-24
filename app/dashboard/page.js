import Sidebar from '../ui/Sidebar'
import Header from '../ui/Header'
import { BiBasket, BiCart, BiCube, BiPackage } from 'react-icons/bi'
import {
  likeIcon,
  totaRevenueIcon,
  totalTransactionIcon,
  userIcon,
} from '@/asset/stat_svg'
import StatsSection from '../ui/StatsSection'
// import Chart from '../ui/Chart'
import LineChart from '../ui/LineChart'

const Dashboard = () => {
  return (
    <div className='flex h-screen bg-[#F5F5F5]'>
      <Sidebar />
      <div className='flex flex-col flex-1 w-full mt-[30px] overflow-y-auto'>
        <Header />
        <main>
          <div className='grid mb-4 pb-10 px-8 mx-4 '>
            <div className='grid grid-cols-12 gap-6'>
              <div className='grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9'>
                <StatsSection />
                <LineChart />
                {/* <Chart /> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
