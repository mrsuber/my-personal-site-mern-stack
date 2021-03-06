import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Sidebar,Topbar} from "../../components"
import img from '../../../../images/boxed-bg.jpg'
import {Link} from 'react-router-dom'


const AdminProdject = ({history}) => {
  const [error,setError] =useState("")
  const [privateData,setPrivateData]=useState("");
  const [lists,setLists]=useState([])
  const [error2,setError2] =useState("")





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
        const {data} = await axios.get("/api/private/getallprodject",config)

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
  function toggleMenu(){
    let toggle = document.querySelector('.admin__topbar')
    let navigation = document.querySelector('.admin__navigation')
    let main = document.querySelector('.admin__main')

    toggle.classList.toggle('admin__active')
    navigation.classList.toggle('admin__active')
    main.classList.toggle('admin__active')

  }

  if(privateData.length===0){
    return("loading ...")
  }
  return (
    error? <span className="error-message">{error}</span>
    :
    <>


    <Sidebar logoutHandler={logoutHandler}  />
    <div className="admin__main">
        <Topbar toggleMenu={toggleMenu} />
    <div className="admin__details">
      <div className="admin__recentOrder">
        <div className="admin__cardHeader">
          <h2>Prodjects Table</h2>
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..."/>
              <span className="input-group-btn">
                <button type='submit' name='search' id='search-btn' className="btn btn-flat"><i className="fa fa-search"></i></button>
              </span>
            </div>
          </form>
          <div>

          <Link to="/adminNewProdject" className="admin__btn">New Prodject</Link>
          </div>

        </div>
        <table>
          <thead>
            <tr>
              <td>Image</td>
              <td>Title</td>
              <td>Description</td>
              <td>References</td>
              <td>Status</td>
              <td>Contorls</td>
            </tr>
          </thead>
          <tbody>
          {privateData.map((prodject,index)=>(
            <tr>
            <td className="admin__td"><div className="admin__imgBox"><img src={`http://localhost:5000/${prodject.filePath}`} alt="user" /></div></td>
              <td>{prodject.title}</td>
              <td>{prodject.desc}</td>
              <td>{prodject.references}</td>
              <td><span className="admin__status admin__delivered">{prodject.status}</span></td>
              <td><div className="tools"><Link to="/adminEditProdject" className="adminlink"><i className="fa fa-edit admin__user-edit"></i></Link><i className="fa fa-trash-o admin__user-delete"></i></div></td>
            </tr>
          ))}


          </tbody>
        </table>
      </div>




    </div>

    </div>



      </>
  )
}

export default AdminProdject
