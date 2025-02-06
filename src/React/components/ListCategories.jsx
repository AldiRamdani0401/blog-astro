import { useEffect, useState } from "react";
import Categories from "./Categories";
import { CircleLoading } from "./Utils/Loading/Circle";

const ListCategories = () => {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);

      return () => clearTimeout(timer);
    }, []);
  return isLoading ? <CircleLoading/> : <Categories />;
};

export default ListCategories;
