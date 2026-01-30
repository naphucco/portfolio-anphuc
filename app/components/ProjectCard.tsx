import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  badge?: string;
  badgeColor?: string;
  link: string;
  highlight?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  badge,
  badgeColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  link,
  highlight
}: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-800">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        {badge && (
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${badgeColor}`}>
            {badge}
          </span>
        )}
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {description}
        {highlight && (
          <span className="font-bold text-green-600 dark:text-green-400"> {highlight}</span>
        )}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <Link 
        href={link} 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium group/link"
      >
        View case study
        <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}