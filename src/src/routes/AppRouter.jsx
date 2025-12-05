import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from '../layouts/Layout.jsx'
import {Home} from '../pages/Home.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
    </Route>
  )
)
export default router