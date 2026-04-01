import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
        {/* <!-- Hero --> */}
        <Hero></Hero>

        {/* <!-- Developers and Employers --> */}
        <HomeCard/>

        {/* <!-- Browse Jobs --> */}
        <JobListings isHome={true} />

        <ViewAllJobs />
    </>
  )
}

export default HomePage