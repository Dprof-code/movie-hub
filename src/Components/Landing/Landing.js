import '../Landing/Landing.css';
import ImdbIcon from '../../Assets/IMDBLogo/ImdbLogo';
import LikeIcon from '../../Assets/LikeIcon/LikeIcon';
//import PlayBtn from '../../Assets/PlayIcon/PlayIcon';

const Landing = () => {

    return (
        <section className='landing-page' id='landingPage'>
            <div className='landing-page-contents container'>
                <aside className='about'>
                    <h1>John Wick 3 : Parabellum</h1>
                    <div className='ratings'>
                        <span><ImdbIcon />86.0 / 100</span>
                        <span><LikeIcon />97%</span>
                    </div>
                    <p>
                        John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
                    </p>
                    <button type="button" class="btn btn-primary btn-lg"><i className="fa-solid fa-play"></i>WATCH TRAILER</button>

                </aside>
                <aside className='pagination-links'>
                    <nav aria-label="">
                        <ul class="pagination-con">
                            <li class="pag-item">
                                <a class="pag-link" href="/" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="pag-item"><a class="pag-link" href="/">1</a></li>
                            <li class="pag-item"><a class="pag-link" href="/">2</a></li>
                            <li class="pag-item"><a class="pag-link" href="/">3</a></li>
                            <li class="pag-item">
                                <a class="pag-link" href="/" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </div>
        </section>
    )
}

export default Landing;