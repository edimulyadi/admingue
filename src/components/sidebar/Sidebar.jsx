import './sidebar.css'
import {lineStyle} from '@material-ui/core'
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTittle">Dashboard</h3>
          <ul classname="sidebarList">
            <li className="sidebarListItem">
            <lineStyle />
            Home
            </li>
            <li className="sidebarListItem">
            <lineStyle />
            Home
            </li>
            <li className="sidebarListItem">
            <lineStyle />
            Home
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

  