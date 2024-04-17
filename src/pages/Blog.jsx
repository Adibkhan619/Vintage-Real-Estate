import "animate.css";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div className="space-y-5">
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <h1 className="lg:text-5xl md:text-4xl text-4xl px-5 mb-5 animate__fadeInUp  font-bold animate__animated animate__bounce">
        Tips for First-Time Home Buyers
      </h1>
      <div className="flex-col-reverse flex lg:flex-row gap-10 px-5 items-center">
        <div>
          <p className="bg-orange-400 text-gray-700 bg-opacity-25 lg:h-48 p-5 text-xl font-semibold rounded-2xl shadow-xl animate__animated animate__fadeInLeft">
            Are you a first-time homebuyer feeling a mix of excitement and
            nervousness as you embark on this journey? Purchasing your first
            home is a significant milestone, but it can also be overwhelming
            with the multitude of decisions involved.
          </p>
          <h1 className="text-3xl font-semibold mt-6">
            Here are some tips to guide you through the process:
          </h1>
        </div>

        <img
          className="lg:w-[500px] w-[390px] rounded-3xl animate__animated animate__pulse"
          src="/banner/pexels-rdne-stock-project-8293778.jpg"
          alt=""
        />
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 px-5 gap-5">
        <p className="bg-orange-200 font-semibold p-8 text-gray-700  rounded-2xl shadow-xl animate__animated animate__fadeInUp ">
          1. Set a Realistic Budget: Before you start browsing listings,
          determine your budget. Consider factors such as your income, existing
          debts, and future expenses. It’s crucial to be realistic about what
          you can afford to avoid financial strain down the line.
        </p>
        <p className="bg-orange-200 font-semibold p-8 text-gray-700  rounded-2xl shadow-xl animate__animated animate__fadeInUp ">
          2. Get Pre-Approved for a Mortgage: Knowing how much you can borrow
          will give you a clear idea of your purchasing power. Getting
          pre-approved for a mortgage not only streamlines the buying process
          but also strengthens your position as a serious buyer when making an
          offer.
        </p>
        <p className="bg-orange-200 font-semibold p-8 text-gray-700  rounded-2xl shadow-xl animate__animated animate__fadeInUp ">
          3. Research Neighborhoods: Location is key when buying a home.
          Research neighborhoods that align with your lifestyle preferences,
          commute time, school districts, and amenities. Visit neighborhoods at
          different times of the day to get a feel for the area’s vibe.
        </p>
        <p className="bg-orange-200 font-semibold p-8 text-gray-700  rounded-2xl shadow-xl animate__animated animate__fadeInUp ">
          4. Prioritize Your Needs vs. Wants: Make a list of non-negotiable
          features you need in a home versus those you desire. While it’s
          essential to have a vision of your dream home, be prepared to
          compromise on certain aspects to stay within your budget.
        </p>
        <p className="bg-orange-200 font-semibold p-8 text-gray-700  rounded-2xl shadow-xl animate__animated animate__fadeInUp ">
          5. Work with a Trusted Realtor: Partnering with a knowledgeable and
          trustworthy real estate agent can make all the difference. They can
          help you navigate the market, negotiate offers, and guide you through
          the paperwork, ensuring a smooth and successful transaction.
        </p>
        <p className="bg-orange-200 font-semibold p-8 text-gray-700  rounded-2xl shadow-xl animate__animated animate__fadeInUp ">
          6. Don’t Skip the Home Inspection: Even if a home looks perfect on the
          surface, it’s essential to have it inspected by a professional. A
          thorough inspection can uncover hidden issues that may not be apparent
          during a walkthrough, potentially saving you from costly repairs down
          the road.
        </p>
        <p className="bg-orange-200 font-semibold p-8 text-gray-700  rounded-2xl shadow-xl animate__animated animate__fadeInUp ">
          7. Plan for Closing Costs: In addition to the down payment, budget for
          closing costs such as attorney fees, appraisal fees, and title
          insurance. Being financially prepared for these expenses will prevent
          any last-minute surprises during the closing process.
        </p>
        <p className="bg-orange-200 font-semibold p-8 text-gray-700  rounded-2xl shadow-xl animate__animated animate__fadeInUp ">
          8. Stay Flexible and Patient: Buying a home can be a lengthy process,
          so it’s essential to remain patient and flexible. Be prepared to make
          compromises and adjust your expectations as you navigate the market.
          Remember, the right home is worth the wait.
        </p>
        <p className="bg-orange-200 font-semibold p-8 text-gray-700  rounded-2xl shadow-xl animate__animated animate__fadeInUp ">
          Conclusion: Navigating the real estate market as a first-time
          homebuyer can be both exciting and daunting. By following these tips
          and seeking guidance from experienced professionals, you can make
          informed decisions and find the perfect home for your needs. Remember,
          the journey to homeownership may have its challenges, but the end
          result is well worth it. Happy house hunting!
        </p>
      </div>
    </div>
  );
};

export default Blog;
