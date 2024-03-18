function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>
      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">About Us</h2>
            <p className="main-p">
            Writers Turing is a platform connecting skilled writers in Kenya to employers across the globe. Employers post writing projects on the platform while writers bid the available projects.
          On our platform beginners can get accesss to mentors to coach them through lessons after which they will graduate 
          as writers and get connected to specific employers to hire them for work. Our aim is to connect writers to employers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
