/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Foodie Feast | Blog</title>
      </Helmet>

      <div>
        <main className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 pt-16 my-10  bg-white mt-20 antialiased">
          <div className="px-6">
            <article className="">
              <header className="mb-4 lg:mb-6 ">
                <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm">
                    <img
                      className="mr-4 w-16 h-16 rounded-full"
                      src="https://i.ibb.co/gyKbqYB/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image-5809521.png"
                      alt="Sohanur Rahman"
                    />
                    <div>
                      <a href="#" rel="author" className="text-xl font-bold ">
                        Sohanur Rahman
                      </a>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        Junior Front-End Developer, instractor & CEO Foodie
                        Feast
                      </p>
                      <p className="text-base text-gray-500 dark:text-gray-400">
                        <time>nov. 10, 2023</time>
                      </p>
                    </div>
                  </div>
                </address>
              </header>

              <div>
                <h1 className="mt-9 mb-4 text-3xl font-extrabold leading-tight  lg:mb-6 lg:text-4xl ">
                  1. What is One way data binding?
                </h1>

                <h3 className="text-xl font-medium text-gray-600">
                  <span className="text-black font-bold">Answer :</span> One-way
                  data binding is a concept used in web development and
                  programming to describe the flow of data from a source (like a
                  variable or a model) to a destination (such as a user
                  interface element like a text box or label). In one-way data
                  binding, data flows in only one direction, typically from the
                  source to the destination. This one-way flow ensures that
                  changes in the source data are reflected in the destination,
                  maintaining a consistent view of the data.{" "}
                </h3>
              </div>
              <div>
                <h1 className="mt-9 mb-4 text-3xl font-extrabold leading-tight  lg:mb-6 lg:text-4xl ">
                  2. What is NPM in node.js?
                </h1>

                <h3 className="text-xl font-medium text-gray-600">
                  <span className="text-black font-bold">Answer :</span> NPM
                  (Node Package Manager) in Node.js is a powerful tool that acts
                  like a library for JavaScript code. It's like a big online
                  store for packages libraries that you can use in your Node.js
                  projects. You can easily find, install, and update these
                  packages using NPM. It also helps you manage project
                  dependencies, run custom tasks, and share your own code with
                  others. In short, it simplifies how you work with code in
                  Node.js and keeps everything organized.
                </h3>
              </div>
              <div>
                <h1 className="mt-9 mb-4 text-3xl font-extrabold leading-tight  lg:mb-6 lg:text-4xl ">
                  3. Different between Mongodb database vs mySQL database.
                </h1>
                <h3 className="text-xl font-medium text-gray-600">
                  <span className="text-black font-bold">Answer :</span>
                </h3>
                <div className="p-4 ">
                  <div className="overflow-x-auto">
                    <table className="min-w-full    text-sm md:text-md lg:text-xl font-medium text-gray-600">
                      <thead>
                        <tr>
                          <th className="border text-black p-4">Aspect</th>
                          <th className="border  text-black p-4">MongoDB</th>
                          <th className="border  text-black p-4">MySQL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100">
                          <td className="border p-3">Data Model</td>
                          <td className="border p-3">
                            NoSQL (JSON-like documents)
                          </td>
                          <td className="border p-3">
                            Relational (structured tables)
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-3">Scalability</td>
                          <td className="border p-3">
                            Easily scalable for large data
                          </td>
                          <td className="border p-3">
                            Scalable but may require complex setup
                          </td>
                        </tr>
                        <tr className="bg-gray-100">
                          <td className="border p-3">Query Language</td>
                          <td className="border p-3">
                            JavaScript-like queries
                          </td>
                          <td className="border p-3">SQL queries</td>
                        </tr>
                        <tr>
                          <td className="border p-3">Schema</td>
                          <td className="border p-3">Schema-less (flexible)</td>
                          <td className="border p-3">
                            Enforces a fixed schema
                          </td>
                        </tr>
                        <tr className="bg-gray-100">
                          <td className="border p-3">ACID Compliance</td>
                          <td className="border p-3">
                            Less strict ACID compliance
                          </td>
                          <td className="border p-3">
                            ACID-compliant (strict data integrity)
                          </td>
                        </tr>
                        <tr>
                          <td className="border p-3">Community & Ecosystem</td>
                          <td className="border p-3">
                            Growing community, modern tech stack
                          </td>
                          <td className="border p-3">
                            Established, extensive support
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </main>

        <section className="bg-slate-300">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md sm:text-center">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl ">
                Sign up for our newsletter
              </h2>
              <p className="mx-auto mb-8 max-w-2xl  text-gray-700 md:mb-12 sm:text-xl ">
                Stay up to date with the roadmap progress, announcements and
                exclusive discounts feel free to sign up with your email.
              </p>
              <form action="#">
                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Email address
                    </label>
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                    </div>
                    <input
                      className="block p-3 pl-9 w-full text-sm text-gray-900 bg-base-200 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      required=""
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-gray-900 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300  dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                  We care about the protection of your data.{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read our Privacy Policy
                  </a>
                  .
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
