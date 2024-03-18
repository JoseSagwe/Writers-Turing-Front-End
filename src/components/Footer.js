import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">Writers Turing</h1>
                <p className="footer-text">
                Writers turing is an online platform employers and writers co-exist. Employers get to post jobs on different areas. 
            Writers get to bid for jobs according to their area focus and  alocated the jobs by the employer.
                </p>
                <p className="footer-text">On our platform we offer mentorship and lessons to beginners and connect them
            to specific employers to hire them for work upon graduation.</p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Links</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="jobsections" spy={true} smooth={true} duration={1000} > About Us </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}> Job Sections </Link>
                  </li>
                  <li>
                  <Link to="#" spy={true} smooth={true} duration={1000}> FAQs  </Link>
                  </li>
                  <li>
                  <Link to="#" spy={true} smooth={true} duration={1000}> Join Lessons  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact Us</p>
                <ul>
                  <li>
                   <Link to="#" >Email: support@writersturing.com</Link>
                  </li>
                  <li>
                    <Link to="#" >Phone: +254700000000</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
