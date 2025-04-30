function Contact() {
    return (
      <div className="text-center">
        <h1 className="mb-4" data-aos="fade-down">Contact Us</h1>
        <p className="lead mb-4" data-aos="fade-up">
          Have questions, feedback, or just want to say hello? We'd love to hear from you!
        </p>
        <div className="card p-4 mx-auto" style={{ maxWidth: '600px' }} data-aos="zoom-in">
          <form>
            <div className="mb-3 text-start">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3 text-start">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="name@example.com" />
            </div>
            <div className="mb-3 text-start">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Write your message..."></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100">Send Message</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Contact;
  