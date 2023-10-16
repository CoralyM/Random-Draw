
import AbsentsList from "./components/AbsentsList"
import AddAbsent from "./components/AddAbsent"
import Layout from "./components/Layout"
import Separator from "./components/Separator"

function Absents() {

  return (
    <Layout>
      <div className="flex-1 flex lg:flex-row flex-col justify-evenly p-20">
        <AddAbsent />
        <Separator/>
        <AbsentsList/>
      </div>
    </Layout>
  )
}

export default Absents
