import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <h1 className="mb-4" data-aos="fade-down">Welcome to Fitness Forum 🏋️‍♂️</h1>
      <p className="lead mb-4" data-aos="fade-up">
        Join the community! Ask questions, share advice, and grow stronger together.
      </p>
      <Link to="/dashboard" className="btn btn-success btn-lg" data-aos="zoom-in">
        Get Started
      </Link>
    </div>
  );
}

export default Home;
