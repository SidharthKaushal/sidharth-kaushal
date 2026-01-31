import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from '../layouts/Layout.jsx'
import {Home} from '../pages/Home.jsx'
import { PortfolioList } from '../pages/portfolio/PortfolioList.jsx'
import { PortfolioDetail } from '../pages/portfolio/PortfolioDetail.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='projects' element={<PortfolioList/>}/>
      <Route path='projects/:id' element={<PortfolioDetail/>}/>
      <Route path='*' element={<>Error Page</>}/>
    </Route>
  )
)
export default router