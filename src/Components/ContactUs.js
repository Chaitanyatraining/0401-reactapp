import React from 'react'

function ContactUs() {
    const handleClick = () => {
        console.log("we clicked")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handle submit")
    }
    return (
        <>
            <h2>ContactUs</h2>
            <div className='row container'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" />
                        </div>
                       
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className='col-md-3'></div>
            </div>
        </>
    )
}

export default ContactUs