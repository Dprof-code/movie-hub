import '../Footer/Footer.css';

const Footer = () => {

    return (
        <footer className='footer'>
            <div className='footer-contents container'>
                <div className='footer-icons'>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
                <ul className='footer-links'>
                    <li><a href='/'>Conditions of Use</a></li>
                    <li><a href='/'>Privacy & Policy</a></li>
                    <li><a href='/'>Press Room</a></li>
                </ul>
                <p>&copy; 2021 MovieBox by Adriana Eka Prayudha  </p>
            </div>
        </footer>
    )
}

export default Footer;