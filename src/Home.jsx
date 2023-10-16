
import Draw from "./components/Draw"
import Layout from "./components/Layout"

function Home() {

  return (
    <Layout>
      <div className="flex-1 flex flex-col items-center justify-center">
        <Draw />
      </div>
    </Layout>
  )
}

export default Home
