import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import {NotificationsActiveIcon, AccountCircleIcon, }  from '@mui/icons-material'


const Navbar = () => {
  return( 
    <div className="nav--container">
      <section className="nav--title">
        <h2>Protos</h2>
      </section>
      <section className="nav--buttons">
        <AccountCircleIcon fontSize="large"/>
      </section>
    </div>
  )
}






export default Navbar