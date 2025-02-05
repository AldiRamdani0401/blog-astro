import IconPoint from "../../../assets/icons/IconPoint";

const SmallArticle = () => {
  return (
    <div className="h-[400px] flex flex-col rounded-sm overflow-hidden border border-slate-200 shadow-lg transform hover:scale-110">
      <img
        src="https://via.assets.so/game.png?id=1&q=95&w=1400&h=400&fit=fill"
        alt=""
        className="object-cover h-full"
      />
      <div className="flex flex-col gap-1 px-2 py-2">
        {/* <!-- Categories --> */}
        <div className="flex flex-row gap-1">
          <button className="text-white text-sm rounded-sm px-1 bg-indigo-600">
            Category 1
          </button>
          <button className="text-white text-sm rounded-sm px-1 bg-yellow-500">
            Popular Sub
          </button>
        </div>
        {/* <!-- end of Categories --> */}
        {/* <!-- Title Article --> */}
        <h1 className="text-xl font-medium h-fit overlow-hidden line-clamp-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.Laudantium
          nostrum, quidem veritatis rerum quibusdam cupiditate velit commodi
          dolor aperiam adipisci officia consectetur a similique, dolorum
          deleniti? Qu
        </h1>
        {/* <!-- Body Article --> */}
        <div className="h-fit overflow-hidden line-clamp-3 text-balance text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          nostrum, quidem veritatis rerum quibusdam cupiditate velit commodi
          dolor aperiam adipisci officia consectetur a similique, dolorum
          deleniti? Quaerat aperiam eum possimus cumque dolores repellendus quam
          eos tempore. Repellat sit sunt maiores consequuntur, rem, pariatur
          nobis, fugiat laudantium aut aspernatur quaerat earum!
        </div>
        <div className="flex flex-row py-1 gap-1 items-center text-xs">
          <img
            src="https://via.assets.so/album.png?id=1&q=95&w=360&h=360&fit=fill"
            className="object-cover h-10 rounded-full"
            alt="author"
          />
          <h3 className="font-medium">Aldi Ramdani</h3>
          <IconPoint/>
          <h3>24 Maret 2025</h3>
        </div>
        {/* <!-- end of Body Article --> */}
      </div>
    </div>
  );
};

export default SmallArticle;
