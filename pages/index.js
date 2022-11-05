import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DefaultLayout from '../components/DefaultLayout'
import TopHeader from '../components/TopHeader'
import Carousel from '../components/CarouselSection'
import TrendingItems from '../components/TrendingItems'
import BestSellingItems from '../components/BestSellingItems'
import ShopByCategory from '../components/ShopByCategory'
import BottomBanner from '../components/BottomBanner'
import Brands from '../components/Brands'
import LastBottomBanner from '../components/LastBottomBanner'
import FromTHeBlog from '../components/FromTHeBlog'
import SubscribeForm from '../components/SubscribeForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <DefaultLayout/>
      <TopHeader/>
      <Carousel/>
      <TrendingItems/>
      <BestSellingItems/>
      <ShopByCategory/>
      <BottomBanner/>
      <Brands/>
      <LastBottomBanner/>
      <FromTHeBlog/>
      <Footer/>
    </div>
  )
}
