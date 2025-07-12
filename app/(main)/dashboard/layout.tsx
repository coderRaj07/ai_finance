import React, { Suspense } from 'react'
import {BarLoader} from 'react-spinners'
import DashboardPage from './page'

const DashboardLayoutPage = () => {
  return (
    <div className='px-5'>
     <h1 className='mb-5 font-bold text-6xl gradient-title'>Dashboard</h1> 

     {/* Dashboard Page */}
    <Suspense fallback={<BarLoader className='mt-4' width={"100%"} color="#d69405"/>} >
     <DashboardPage/>
    </Suspense>

    </div>
  )
}

export default DashboardLayoutPage
