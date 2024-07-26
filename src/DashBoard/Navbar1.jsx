import { useContext } from 'react'
import './navbar.scss'
import { AuthContext } from '../context/AuthContext'


function Navbar1() {
  const { user } = useContext(AuthContext)
  return (
    <>
    <div className="navbar1">
      <div className="wrapper1">
 
        <div className="items">
        {/* <div className="item">
            <img src=""
              alt="" className="avatar" />
          </div> */}
          <div className="item">
            <h3 className='sm-f-24'>Hello!! {user.name}</h3>
          </div>
        </div>
      </div>
         </div>
    <hr />
    </>
  )
}

export default Navbar1