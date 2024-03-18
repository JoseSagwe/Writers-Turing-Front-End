import Card from "./Card";


function JobSections() {
  return (
    <div className="container jobsections">
        <h2 className="main-title text-center">Job Sections</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Academic Writing" img="card1.png" text="Elevate your academic writing skills journey with our comprehensive suite of writing jobs avilable on our platform. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Programming & Coding" img="card2.png" text="Work on Dynamic array of programming and coding tasks, ranging fom algorithms to sofware development projects from our clients." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Projects" img="card3.png" text="Join our vibrant community of freelancers and clients on our project bidding platform. Bid on exiting projects from our clients." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default JobSections;
