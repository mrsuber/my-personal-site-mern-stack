import React from 'react'
import {Link} from 'react-router-dom'
const AdminSideBar = () => {
  return (
    <aside className="main-sidebar">

      <section className="sidebar">

        <div className="user-panel">
          <div className="pull-left image">
            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
          </div>
          <div className="pull-left info">
            <p>Alexander Pierce</p>

            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>

        <form action="#" method="get" className="sidebar-form">
          <div className="input-group">
            <input type="text" name="q" className="form-control" placeholder="Search..."/>
            <span className="input-group-btn">
              <button type='submit' name='search' id='search-btn' className="btn btn-flat"><i className="fa fa-search"></i></button>
            </span>
          </div>
        </form>


        <ul className="sidebar-menu">
          <li className="header">MAIN NAVIGATION</li>
          <li className="active treeview">
            <a href="#">
              <i className="fa fa-dashboard"></i> <span>Dashboard</span> <i className="fa fa-angle-left pull-right"></i>
            </a>
            <ul className="treeview-menu">
              <li className="active"><Link to="/"><i className="fa fa-circle-o"></i> Dashboard</Link></li>
              <li className="active"><Link to="/users"><i class="fa fa-users"></i> User tables</Link></li>
              <li><Link to="/prodjects"><i class="fa fa-archive"></i> Prodject tables</Link></li>
            </ul>
          </li>
          <li className="treeview">
            <a href="#">
              <i className="fa fa-table"></i> <span>Tables</span>
              <i className="fa fa-angle-left pull-right"></i>
            </a>
            <ul className="treeview-menu">
              <li className="active"><Link to="/users"><i class="fa fa-users"></i> User tables</Link></li>
              <li><Link to="/prodjects"><i class="fa fa-archive"></i> Prodject tables</Link></li>
            </ul>
          </li>



        </ul>
      </section>

    </aside>
  )
}

export default AdminSideBar
