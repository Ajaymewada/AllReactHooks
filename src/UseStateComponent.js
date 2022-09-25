import React,{ useState } from 'react'
import styled from 'styled-components'
function UseStateComponent() {
    const [userFormData, setuserFormData] = useState({
        username: "",
        email: "",
        address: ""
    })
    const [userDataArray, setuserDataArray] = useState([])

    const handleUserData = (e) => {
       let name = e.target.name;
       let value = e.target.value;
       setuserFormData((prevVal) => {
           return {...prevVal,[name]:value}
       })
    }
    const submitTheForm = (e) => {
        e.preventDefault();
        setuserDataArray((prevValues) => {
            return [userFormData,...prevValues]
        })
        setuserFormData(() => {
            return {
                username: "",
                email: "",
                address: ""
            }
        })
    }
  return (
    <div>
        <div className="my-4">
            <div className="col-md-6 offset-md-3">
                <div className="card p-4 text-secondary">
                    <h5 className="text-secondary">Register</h5>
                    <form onSubmit={submitTheForm}>
                        <div className="form-group py-3">
                        <label htmlFor="">Name</label>
                        <input type="text" name="username" value={userFormData.username} onChange={handleUserData} className="form-control" placeholder="User Name.."/>
                        </div>
                        <div className="form-group py-3">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" value={userFormData.email} onChange={handleUserData} className="form-control" placeholder="User Email.."/>
                        </div>
                        <div className="form-group py-3">
                        <label htmlFor="">Address</label>
                        <input type="text" name="address" value={userFormData.address} onChange={handleUserData} className="form-control" placeholder="User Address.."/>
                        </div>
                        <button className="btn btn-success">Add</button>
                    </form>
                </div>
            </div>
        </div>
        <Wrapper>
        <div className="p-4 cardContainer" style={{marginRight:'0px !important'}}>
          {userDataArray.length > 0 ? userDataArray.map((elem,key) => {
                        return (
                            <div className="col-md-4">
                                <div className="card bg-white mt-3 text-secondary pt-3 px-3">
                                <ul style={{listStyle:"none",paddingLeft:0}}>
                                    <li>Name : {elem.username}</li>
                                    <li>Email : {elem.email}</li>
                                    <li>Address: {elem.address}</li>
                                </ul>
                                </div>
                            </div> 
                        )
            }) : ""}
        </div>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
.cardContainer{
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
}
`

export default UseStateComponent