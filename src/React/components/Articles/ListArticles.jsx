import { useEffect, useState } from "react";
import SkeletonArticle from "../Utils/Loading/Skeleton";
import SmallArticle from "./Card/SmallArticle";

export default function ListArticles() {
  const [isLoading, setIsLoading] = useState(true);
  const articles = Array.from({ length: 10 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="py-8 grid grid-cols-4 gap-5 space-y-2 w-full">
      {isLoading
        ? articles.map((_, index) => <SkeletonArticle key={index} />)
        : articles.map((_, index) => <SmallArticle key={index} />)}
    </div>
  );
}
