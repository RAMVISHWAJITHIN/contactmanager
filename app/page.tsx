
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
          Manage Your Contacts <br />
          <span className="text-blue-600">Effortlessly</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          A simple and powerful contact manager to store, organize, and access
          your contacts anytime, anywhere.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Get Started
          </a>
          <a
            href="/register"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Create Account
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Easy Management
          </h3>
          <p className="text-gray-600">
            Add, edit, and delete contacts with a clean and simple interface.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Fast Access
          </h3>
          <p className="text-gray-600">
            Quickly search and find your contacts whenever you need them.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Secure Data
          </h3>
          <p className="text-gray-600">
            Your contact data is handled safely and securely.
          </p>
        </div>

      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Start Managing Your Contacts Today 🚀
        </h2>
        <p className="mt-4 text-blue-100">
          Join now and simplify your contact management.
        </p>

        <a
          href="/register"
          className="inline-block mt-6 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Sign Up Now
        </a>
      </section>

    </div>
  );
}
