function H_Category () {
  alert('Solid Jalan..');
}

const Categories = () => {
  return (
    <div className="flex flex-row gap-2 w-full py-1 select-none">
      <button type="button" className="border px-2 rounded-sm" onClick={H_Category}>
        Category 1
      </button>
      <button type="button" className="border px-2 rounded-sm">
        Category 2
      </button>
      <button type="button" className="border px-2 rounded-sm">
        Category 3
      </button>
      <button type="button" className="border px-2 rounded-sm">
        More
      </button>
    </div>
  );
};

export default Categories;
