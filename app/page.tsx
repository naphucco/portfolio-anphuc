import { ArrowRight, Code, Cpu, Zap } from "lucide-react";
import Link from "next/link";
import FeaturedProjects from "./components/FeaturedProjects";
// import TradingPlatformCard from "./components/TradingPlatformCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Intro */}
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mb-6">
                <Code className="w-4 h-4 mr-2" />
                Software Engineer
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Ân Phúc
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I build <span className="font-semibold text-blue-600 dark:text-blue-400">fast</span>,{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">scalable</span>, and{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">user-friendly</span>{" "}
                web applications with modern technologies. Specializing in performance optimization 
                and interactive UI experiences.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center">
                  <Cpu className="w-5 h-5 text-green-500 mr-2" />
                  <span className="font-medium">Performance Expert</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="font-medium">2min → 3s Optimization</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/projects" 
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/performance" 
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300"
                >
                  Performance Metrics
                </Link>
              </div>
            </div>
            
            {/* Right: Tech Stack Visualization */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-4">
                {techStack.map((tech) => (
                  <div 
                    key={tech.name}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <span className="font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
              
              {/* Stats */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">8+</div>
                    <div className="text-sm text-gray-500">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">15+</div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">75%</div>
                    <div className="text-sm text-gray-500">Lighthouse Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <FeaturedProjects />
      
      {/* FinTech Skills Demonstration */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium mb-4">
              Proof of Concept
            </span>
            <h2 className="text-3xl font-bold mb-4">FinTech Trading Platform</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Demonstrating technical capabilities for real-time financial systems
            </p>
          </div>
          {/* <TradingPlatformCard /> */}
        </div>
      </section>
    </div>
  );
}

// Tech stack icons
const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Angular", icon: "🅰️" },
  { name: "Flutter", icon: "📱" },
  { name: "Unity", icon: "🎮" },
];