import React, { useEffect, useState } from 'react'

function PaginationUseEffect() {

    // const [count,setCount] = useState(0);
    const [userData,setUserData] = useState([]);
    const [pageNumber,setPageNumber] = useState(0);


    const getDummyUserData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
            {
                method: "GET",
                headers: {
                    "app-id": "633e33e98efd49504c9c7643"
                }
            }
        )
        const { data } = await response.json();
        setUserData(data);
    }

    useEffect(()=>{
        getDummyUserData();

        return(
            console.log("this is unmounting")
        )
    },[pageNumber])

  return (
    <center>
        <h2>PaginationUseEffect</h2>
        {
                    userData.length ? (
                        <div>
                            <div className='container'>
                                <div className='row'>
                                    {
                                        userData.map((user) => (
                                            <div className='col-md-6'>
                                                <div className='card my-3'>
                                                    <div className='row'>
                                                        <div className='col-md-4'>
                                                            <img src={user.picture} className="m-3" alt={user.firstName} />
                                                        </div>
                                                        <div className='col-md-8'>
                                                            <h5>{user.id}</h5>
                                                            <p>{user.firstName} {user.lastName}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ) : null
                }
                <center>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <button className='btn btn-info me-2' onClick={()=>(setPageNumber(num))}>{num}</button>
                    ))}
                </center>
    </center>
  )
}

export default PaginationUseEffect