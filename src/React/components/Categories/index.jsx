function H_Category () {
  alert('React Jalan..');
}

const Categories = () => {
  return (
    <div className="flex flex-row gap-2 w-full py-1 select-none">
      <button type="button" className="bg-yellow-300 text-slate-600 px-2 text-sm rounded-md font-medium hover:bg-yellow-200 hover:font-bold shadow-md cursor-pointer" onClick={H_Category}>
        JavaScript
      </button>
      <button type="button" className="bg-indigo-800 text-slate-50 px-2 text-sm rounded-md font-medium hover:bg-indigo-600 hover:font-bold shadow-md cursor-pointer">
        Astro
      </button>
      <button type="button" className="bg-blue-500 text-slate-50 px-2 text-sm rounded-md font-medium hover:bg-blue-300 hover:font-bold shadow-md cursor-pointer">
        Solid
      </button>
      <button type="button" className="bg-blue-700 text-slate-50 px-2 text-sm rounded-md font-medium hover:bg-blue-500 hover:font-bold shadow-md cursor-pointer">
        TypeScript
      </button>
      <button type="button" className="bg-blue-800 text-slate-50 px-2 text-sm rounded-md font-medium hover:bg-blue-600 hover:font-bold shadow-md cursor-pointer">
        Golang
      </button>
    </div>
  );
};

export default Categories;
