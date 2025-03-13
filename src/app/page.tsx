import Banner from './components/section/1.banner'
import LatestCourseBanner from './components/section/2.banner'
import Footer from './components/section/footer'
import Course from './components/section/course'
import HotestCurse from './components/section/hotest-curse'
import UpcomingCoursesBanner from './components/section/upcoming-courses-banner'

export default function Page() {
  return (
    <div className='relative pt-16'>
      <Banner />
      <LatestCourseBanner />
      <Course />
      <UpcomingCoursesBanner />
      <HotestCurse />
      <Footer />
    </div>
  )
}
