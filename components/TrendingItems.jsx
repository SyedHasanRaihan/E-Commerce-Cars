import React from 'react'

const TrendingItems = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold tracking-wider'>Trending Items</h1>
        <p className='text-[#8C8C8C] tracking-wider]'>Explore these best-selling products that people love to buy.</p>
        <div className='flex flex-col justify-center items-center my-10 border-2 w-[211px] h-[307px] py-4 '>
            <img className='w-[209px] h-[172px] mb-4' src="/assets/topHeader/break.png" alt="brake" />
            <h1 className='text-xl text-[#8c8c8c]'>Brand</h1>
            <p className='tracking-wide'>Model</p>
            <p>Ratings</p>
            <h1 className='text-xl'>$Price</h1>
        </div>
        <div className='mb-10'>
            <img src="/assets/trendingItems/trendingItems.jpg" alt="/" />
        </div>
    </div>
  )
}

export default TrendingItems