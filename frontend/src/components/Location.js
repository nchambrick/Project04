function Location() {
    return (
      <div className="text-center">
        <h1 className="mb-4" data-aos="fade-down">Find a Fitness Studio 🏋️‍♀️</h1>
        <p className="lead mb-4" data-aos="fade-up">
          Looking for a place to train? Find a local gym or fitness studio near you!
        </p>
        {/* Embedded Google Map */}
        <div className="ratio ratio-16x9" data-aos="zoom-in">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.185036961473!2d-122.41941548468026!3d37.77492977975916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c219d0b91%3A0x8db1d7a7c7c927f!2sFitness%20SF!5e0!3m2!1sen!2sus!4v1618281367121!5m2!1sen!2sus"
  allowFullScreen
  loading="lazy"
  title="Fitness Studio Map"
></iframe>

        </div>
      </div>
    );
  }
  
  export default Location;
  