
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  gradient: string;
}

const CategoryCard = ({ title, description, icon: Icon, link, gradient }: CategoryCardProps) => {
  return (
    <Link to={link} className="group block">
      <Card className="h-64 transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0 overflow-hidden relative">
        <div className={`absolute inset-0 ${gradient} opacity-90`}></div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
        <CardContent className="relative z-10 flex flex-col items-center justify-center h-full text-center p-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6 group-hover:scale-110 transition-all duration-300">
            <Icon className="h-12 w-12 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-200 transition-colors">
            {title}
          </h3>
          <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors">
            {description}
          </p>
          <div className="mt-4 text-white/80 text-sm group-hover:text-yellow-200 transition-colors">
            Explore now →
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
