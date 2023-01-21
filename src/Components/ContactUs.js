import React, { Component } from 'react'


class ContactUs extends Component{

    state={
        firstName :"",
        lastName:"",
        email:"",
        phone:"",
        firstNameErr:"",
        lastNameErr:"",
        emailErr:"",
        phoneErr:""
    }

     handleChange = (e) => {
        const {name,value} = e.target;
        this.setState({[name]:value})
        console.log(this.state)
    }

    // validation
    // firstname>4
    // lastName>1
    // email should include '@'
    // phone should be 10

    validateForm = ()=>{
        let firstNameErr = "";
        let lastNameErr = "";
        let emailErr = "";
        let phoneErr = "";

        if(this.state.firstName.length <= 4){
            firstNameErr = "first Name should be atleast 4 characters";
        }

        if(this.state.lastName.length <= 1){
            lastNameErr = "last Name should be atleast 1 characters";
        }

        if(!this.state.email.includes("@")){
            emailErr = "email  should include @";
        }

        if(this.state.phone.length !== 10){
            phoneErr = "phone number should have 10 digits";
        }

        if(firstNameErr || lastNameErr || emailErr || phoneErr){
            this.setState({firstNameErr,lastNameErr,emailErr,phoneErr})
            return false;
        }else{
            this.setState({firstNameErr,lastNameErr,emailErr,phoneErr})
            return true;
        }
    }

     handleSubmit = (e) => {
        e.preventDefault();
        this.validateForm();
    }

    render(){
        return (
            <>
                <h2>ContactUs</h2>
                <div className='row container'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <form onSubmit={this.handleSubmit}>
                            <div class="mb-3">
                                <label class="form-label">first Name</label>
                                <input type="text" class="form-control"
                                 onChange={this.handleChange}
                                 name="firstName"
                                 value={this.state.firstName}
                                  />
                                  <p className='text-danger'>{this.state.firstNameErr}</p>
                            </div>
                            <div class="mb-3">
                                <label  class="form-label">Last Name</label>
                                <input type="text" class="form-control"
                                 onChange={this.handleChange}
                                 name="lastName"
                                 value={this.state.lastName}
                                  />
                                <p className='text-danger'>{this.state.lastNameErr}</p>

                            </div>
                            <div class="mb-3">
                                <label  class="form-label">Email</label>
                                <input type="text" class="form-control" 
                                onChange={this.handleChange}
                                name="email"
                                value={this.state.email}
                                 />
                                <p className='text-danger'>{this.state.emailErr}</p>

                            </div>
                            <div class="mb-3">
                                <label  class="form-label">phone</label>
                                <input type="number" class="form-control"
                                 onChange={this.handleChange}
                                 name="phone"
                                 value={this.state.phone}
                                  />
                                   <p className='text-danger'>{this.state.phoneErr}</p>                                 
                            </div>
                           
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </>
        )
    }
   
}

export default ContactUs