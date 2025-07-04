import { Link } from 'react-router-dom'
import './Header.css';
import { useState } from 'react';
function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  };
  // Function to close drawer when a link is clicked
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return(
    <header className='header'>
      <nav className="d-none d-md-flex">
        
        <Link to="/home" class="li1">Home</Link>
        <Link to="/americandog" class="li1">American Dog</Link>
        <Link to="/germanshepard" class="li1">German Shepard</Link>
        <Link to="/goldenretriever" class="li1">Golden Retriever</Link>
        <Link to="/pomeranian" class="li1">Pomeranian</Link>
        <Link to="/shiba" class="li1">Shiba lnu</Link>
        <Link to="/shiberianhusky" class="li1">Siberian Husky</Link>
      </nav>

      <button className="hamburger-menu d-md-none" onClick={toggleDrawer}>        
              <span className="hamburger-icon"></span>
              <span className="hamburger-icon"></span>
              <span className="hamburger-icon"></span>
            </button>
            {/* Mobile Drawer Navigation */}
            <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
              <button className="close-drawer-btn" onClick={toggleDrawer}>
                ✕
              </button>
              <Link to="/home" className="nav-item" onClick={closeDrawer}>
                Home
              </Link>
              <Link to="/americandog" className="nav-item" onClick={closeDrawer}>
               American Dog
              </Link>
              <Link to="/germanshepard" className="nav-item" onClick={closeDrawer}>
               German Shepard
              </Link>
              <Link to="/goldenretriever" className="nav-item" onClick={closeDrawer}>
                Golden Retriever
              </Link>
              <Link to="/pomeranian" className="nav-item btn primary-btn" onClick={closeDrawer}>
                Pomeranian
              </Link>
              <Link to="/shiba" className="nav-item btn primary-btn" onClick={closeDrawer}>
                Shiba lnu
              </Link>
              <Link to="/shiberianhusky" className="nav-item btn primary-btn" onClick={closeDrawer}>
                Siberian Husky
              </Link>
            </nav>
             {/* Overlay when drawer is open */}
             {isDrawerOpen && (
              <div className="drawer-overlay" onClick={toggleDrawer}></div>
            )}

    </header>
  )
}
export default Header;