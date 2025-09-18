import Image from "next/image";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  text: string;
  authorImage: string;
  authorName: string;
  authorTitle: string;
  stars?: number;
}

export function TestimonialCard({
  text,
  authorImage,
  authorName,
  authorTitle,
  stars = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-brand-dark/50 border border-white/10 rounded-lg p-6 flex flex-col h-full relative">
      <Quote className="absolute top-4 left-4 w-8 h-8 text-brand-green/20 transform -translate-x-2 -translate-y-2" />
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-300 mb-6 flex-grow">"{text}"</p>
      <div className="flex items-center gap-4 mt-auto">
        <Image
          src={authorImage}
          alt={authorName}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div>
          <p className="font-bold text-white">{authorName}</p>
          <p className="text-sm text-gray-400">{authorTitle}</p>
        </div>
      </div>
       <Quote className="absolute bottom-4 right-4 w-8 h-8 text-brand-green/20 transform rotate-180 translate-x-2 translate-y-2" />
    </div>
); }