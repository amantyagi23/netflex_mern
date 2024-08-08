import CreateMovie from "../modules/movies/components/CreateMovie"
import Navbar from "../shared/components/Navbar"
import { useUser } from "../shared/providers/UserProvider"

const DashboardPage = () => {

  return (

    <>
    <Navbar/>

    <h1>Hello Amin </h1>
    <CreateMovie/>
    </>
  )
}

export default DashboardPage