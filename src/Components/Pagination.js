import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        userData: [],
        pageNumber: 0
    }

    getDummyUserData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
            {
                method: "GET",
                headers: {
                    "app-id": "633e33e98efd49504c9c7643"
                }
            }
        )
        const { data } = await response.json();
        this.setState({ userData: data })
    }

    handleBtnClick = (num) =>{
        this.setState({pageNumber:num})
    }

    componentDidUpdate(prevsProps,prevsState){
        // when the state are props is updated (componentDidUpdate will be called)
    
        if(prevsState.pageNumber !== this.state.pageNumber){
            this.getDummyUserData();
        }
    }

    componentDidMount() {
        this.getDummyUserData();
    }

    render() {
        return (
            <div>
                <h2>Pagination</h2>
                {
                    this.state.userData.length ? (
                        <div>
                            <div className='container'>
                                <div className='row'>
                                    {
                                        this.state.userData.map((user) => (
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
                        <button className='btn btn-info me-2' onClick={()=>{this.handleBtnClick(num)}}>{num}</button>
                    ))}
                </center>
            </div>
        )
    }
}

export default Pagination