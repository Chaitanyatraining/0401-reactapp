import React from 'react'
import {Routes,Route} from 'react-router-dom'
import ContactUs from '../ContactUs'
import HomeComp from '../HomeComp'
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
        </Routes>
    </div>
  )
}

export default Routing