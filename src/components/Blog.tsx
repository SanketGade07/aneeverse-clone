import blog1 from "../assets/blog/Agency-vs-Freelancer-vs-In-House-1.avif";
import blog2 from "../assets/blog/5-Marketing-Strategies-That-Attract-High-Value20SaaS-Leads-1.avif";
import blog3 from "../assets/blog/How-to-Use-n8n-to-Collect-LinkedIn-Leads-1.avif";

const blogPosts = [
  {
    id: 1,
    category: "BRANDING & WEB DESIGN",
    title: "Agency vs Freelancer vs In-House: 5 Reasons Agencies Win for SaaS Web Design",
    image: blog1,
    tagColor: "bg-[#0b3a3f]",
  },
  {
    id: 2,
    category: "SAAS & STARTUP MARKETING",
    title: "5 Marketing Strategies That Attract High-Value SaaS Leads",
    image: blog2,
    tagColor: "bg-[#1a343b]",
  },
  {
    id: 3,
    category: "AI & BUSINESS AUTOMATION",
    title: "How to Use n8n to Collect LinkedIn Leads Without Sales Navigator",
    image: blog3,
    tagColor: "bg-[#1a343b]",
  },
];

const Blog = () => {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-[#03151a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <p className="text-gray-400 text-[10px] md:text-sm mb-2 tracking-widest uppercase font-bold">
              GOT TIME?
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-tight">
              WE RECOMMEND
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#0b2b33] hover:bg-teal-700 text-white text-sm font-medium rounded-full transition-all duration-300 h-11"
          >
            View all
          </a>
        </div>

        {/* Desktop View: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group relative flex flex-col h-[480px] bg-[#0b2b33] rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 cursor-pointer"
            >
              <div className="h-[288px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-6 pb-7 justify-center">
                <div className="mb-4">
                  <span className={`inline-block px-4 py-1.5 rounded-full ${post.tagColor} text-white text-[10px] font-bold tracking-widest uppercase`}>
                    {post.category}
                  </span>
                </div>
                <h3 className="text-white text-lg font-semibold leading-snug line-clamp-3 uppercase tracking-tight">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-6 px-6 gap-5 pb-4">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex-shrink-0 w-[280px] snap-center group relative flex flex-col h-[400px] bg-[#0b2b33] rounded-[2.5rem] overflow-hidden cursor-pointer"
              >
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col p-6 flex-1 justify-center">
                  <div className="mb-3">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#0d3d44] text-[#88D7F0] text-[9px] font-black tracking-widest uppercase">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-white text-[15px] font-bold leading-tight line-clamp-3">
                    {post.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;
