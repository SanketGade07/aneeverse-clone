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
        <div className="flex items-end justify-between mb-10 md:mb-12">
          <div>
            <p className="text-gray-400 text-xs md:text-sm mb-2 tracking-widest uppercase font-medium">
              GOT TIME?
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group relative flex flex-col h-[420px] md:h-[480px] bg-[#0b2b33] rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 cursor-pointer"
            >
              <div className="h-[288px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className={`inline-block px-4 py-1.5 rounded-full ${post.tagColor} text-white text-[10px] font-bold tracking-widest uppercase`}>
                    {post.category}
                  </span>
                </div>
                <h3 className="text-[#b0d8de] text-xl md:text-2xl font-bold leading-[1.3]">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
