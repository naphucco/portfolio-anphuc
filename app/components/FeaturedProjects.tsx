import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Fire Safety Dashboard",
    description: "Optimized dashboard load time from 2+ minutes to under 3 seconds. Implemented lazy loading, code splitting, and optimized rendering for complex interactive charts.",
    tags: ["Next.js", "TypeScript", "Chart.js", "Vercel", "Performance"],
    badge: "Performance",
    badgeColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    link: "/projects/ekonect-dashboard",
    highlight: "2+ minutes → 3 seconds"
  },
  {
    title: "HR Management System",
    description: "Modernized legacy Java JSP system to Angular 14 SPA, improving UX and maintainability. Created SQL procedures for complex data simulations.",
    tags: ["Angular 14", "Java", "SQL", "Migration", "Enterprise"],
    badge: "Modernization",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    link: "/projects/hr-system",
    highlight: "JSP → Angular SPA"
  },
  {
    title: "Mobile Game Portfolio",
    description: "Developed and published multiple 2D pixel games on Google Play. Integrated Firebase for player data and implemented game optimization techniques.",
    tags: ["Unity", "C#", "Firebase", "Android", "Game Dev"],
    badge: "Games",
    badgeColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    link: "/projects/games",
    highlight: "Published on Google Play"
  }
];

export default function FeaturedProjects() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world production applications with measurable impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/projects" 
            className="inline-flex items-center px-6 py-3 text-base font-medium rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}