import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css'

const Navbar = () => {
  return <nav className={classes.nav}>
    <div>
      <br />
      <div className={classes.item}>
        <NavLink to="/groups" > Groups</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/mygroup" > My Group</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" > Dialogs</NavLink>
      </div>

      <h2> <strong>About:</strong></h2>

      <div className={classes.item}>
        <NavLink to="/politics" > Politics</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/weather" >Weather</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" >Music</NavLink>
      </div>
    </div>
    <br />
    <div className={classes.item}>
      <NavLink to="/settings" >Settings</NavLink>
    </div>
  </nav>;
}

export default Navbar;