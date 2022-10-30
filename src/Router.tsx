import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/index'
import { Home } from './pages/Home'
import { SalesAccessories } from './pages/SalesAccessories'
import { SalesNotebook } from './pages/SalesNotebook'
import { Services } from './pages/Services'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/salesnotebook' element={<SalesNotebook />} />
                <Route path='/salesaccessories' element={<SalesAccessories />} />
                <Route path='/services' element={<Services />} />
            </Route>
        </Routes>
    )
}