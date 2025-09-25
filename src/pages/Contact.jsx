const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-10">
      <title>Contact Us | Travel Agency</title>
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Contact Us</h1>
        <p className="text-lg max-w-xl mx-auto">
          Have questions, ideas, or want to join a trip? Send us a message and
          we’ll get back to you soon!
        </p>
      </section>
      <form className="grid grid-cols-1 gap-6 bg-base-200 p-6 rounded-box shadow-md">
        <div className="form-control w-full">
          <label className="label" for="name">
            <span className="label-text">Name</span>
          </label>
          <input
            id="name"
            placeholder="Your full name"
            className="input input-bordered w-full"
            type="text"
          />
        </div>

        <div className="form-control w-full">
          <label className="label" for="email">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            placeholder="you@example.com"
            className="input input-bordered w-full"
            type="email"
          />
        </div>

        <div className="form-control w-full">
          <label className="label" for="message">
            <span className="label-text">Message</span>
          </label>
          <textarea
            id="message"
            className="textarea textarea-bordered w-full h-32"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <div className="text-right">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
