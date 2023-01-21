import React, { Component } from 'react'

class UsersData extends Component {

    state = {
      usersData:[]
    }

      getUsersData = async()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json();
        this.setState({usersData:data})
      }

      componentDidMount(){
        this.getUsersData();
      }


   render(){
  return (
    <div>
        <h2 className='text-center mt-4'>UsersData</h2>
        <table className='table table-dark table-hover'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>userName</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {
                 this.state.usersData.length>0 ?   (this.state.usersData.map((user)=>(
                        <tr className='text-white' key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))):null
                }
            </tbody>
        </table>
    </div>
  )
}
}

export default UsersData