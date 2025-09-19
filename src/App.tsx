import { Outlet } from "react-router"
import { CommonLayout } from "./components/layout/commonLayout"

function App() {

  return (
    <>
      <CommonLayout>
        <h1>my website</h1>
        <Outlet></Outlet>
      </CommonLayout>
    </>
  )
}

export default App
