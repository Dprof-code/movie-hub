import '../NavBar/Navbar.css'
import Logo from '../Logo/Logo';
import MenuIcon from '../../Assets/MenuBar/MenuBar';
import SearchIcon from '../../Assets/SearchIcon/SearchIcon';

const NavBar = () => {
    return (
        <div className="">
            <header className=''>
                <div className='container nav-con'>
                    <div>
                        <Logo />
                        <a href='/'>MovieHub</a>
                    </div>

                    <div className='search-wrap'>
                        <form>
                            <input className='input-box' type="search" placeholder="What do you want to watch?" aria-label="Search" />
                            <SearchIcon />
                        </form>
                    </div>

                    <nav>
                        <div>
                            <a className="navbar-text me-2" href='/'>Sign In</a>
                            <MenuIcon />
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default NavBar;