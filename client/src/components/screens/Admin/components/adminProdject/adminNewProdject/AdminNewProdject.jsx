import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import AdminHeader from '../../adminHeader/AdminHeader'
import AdminSideBar from '../../adminSideBar/AdminSideBar'
import AdminFooter from '../../adminFooter/AdminFooter'
import img from '../../../../../images/boxed-bg.jpg'
import img1 from '../../../../../images/portImages/netflix2.png'

import './AdminNewProdject.css'

const AdminNewProdject = ({history}) => {
  const [error,setError] =useState("")
  const [privateData,setPrivateData]=useState("");

  useEffect(()=>{
    if(!localStorage.getItem("authToken")){
      history.push("/login")
    }
    const fetchPrivateData = async () =>{
      const config = {
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`
        }
      }
      try{
        const {data} = await axios.get("/api/private",config)

        setPrivateData(data.data)

      }catch(error){

        localStorage.removeItem("authToken")
        setError("You are not authorized please login")
      }
    }

    fetchPrivateData()
  },[history])

  const logoutHandler=()=>{
    localStorage.removeItem("authToken")
    history.push("/login")
  }
  return (
    error? <span className="error-message">{error}</span>
    :
    <>
    <div className="wrapper" >
    <AdminHeader logoutHandler={logoutHandler} />

    <AdminSideBar />
    <div className="content-wrapper" style={{background: `url(${img}) repeat fixed`}}>

    <div>newProdject</div>
    </div>
    <AdminFooter />
    </div>
      </>
  )
}

export default AdminNewProdject
