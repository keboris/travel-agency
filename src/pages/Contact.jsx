const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto space-y-10">
      <title>Contact Us | Travel Agency</title>
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Contact Us</h1>
        <p class="text-lg max-w-xl mx-auto">
          Have questions, ideas, or want to join a trip? Send us a message and
          we’ll get back to you soon!
        </p>
      </section>
      <form class="grid grid-cols-1 gap-6 bg-base-200 p-6 rounded-box shadow-md">
        <div class="form-control w-full">
          <label class="label" for="name">
            <span class="label-text">Name</span>
          </label>
          <input
            id="name"
            placeholder="Your full name"
            class="input input-bordered w-full"
            type="text"
          />
        </div>

        <div class="form-control w-full">
          <label class="label" for="email">
            <span class="label-text">Email</span>
          </label>
          <input
            id="email"
            placeholder="you@example.com"
            class="input input-bordered w-full"
            type="email"
          />
        </div>

        <div class="form-control w-full">
          <label class="label" for="message">
            <span class="label-text">Message</span>
          </label>
          <textarea
            id="message"
            class="textarea textarea-bordered w-full h-32"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <div class="text-right">
          <button type="submit" class="btn btn-primary">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
