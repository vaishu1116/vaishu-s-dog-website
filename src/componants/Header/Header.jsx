import { Link } from 'react-router-dom'
import './Header.css';
const Header = () => {
  return(
    <header>
      <nav className='nav'>
        
        <Link to="/home" class="li1">Home</Link>
        <Link to="/americandog" class="li1">American Dog</Link>
        <Link to="/germanshepard" class="li1">German Shepard</Link>
        <Link to="/goldenretriever" class="li1">Golden Retriever</Link>
        <Link to="/pomeranian" class="li1">Pomeranian</Link>
        <Link to="/shiba" class="li1">Shiba lnu</Link>
        <Link to="/shiberianhusky" class="li1">Siberian Husky</Link>
      </nav>
    </header>
  )
}
export default Header;