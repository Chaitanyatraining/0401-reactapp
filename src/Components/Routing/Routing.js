import React from 'react'
import {Routes,Route} from 'react-router-dom'
import PaginationUseEffect from '../../PaginationUseEffect'
import ContactUs from '../ContactUs'
import HomeComp from '../HomeComp'
import UseContextHook from '../Hooks/UseContextHook'
import UseReducerHook from '../Hooks/UseReducerHook'
import UseRefHook from '../Hooks/UseRefHook'
import Pagination from '../Pagination'
import UsersData from '../UsersData'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomeComp/> } />
            <Route path="/usersdata" element={<UsersData />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/paginationuseEffect" element={<PaginationUseEffect />} />
            <Route path="/useRefHook" element={<UseRefHook />} />
            <Route path="/useContextHook" element={<UseContextHook />} />
            <Route path="/usereducer" element={<UseReducerHook />} />
        </Routes>
    </div>
  )
}

export default Routing