function CategoryList({ categories, onSelectCategory }) {
    return (
      <div className="list-group" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        {categories.map((category, index) => (
          <button
            key={index}
            className="list-group-item list-group-item-action"
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
  
  export default CategoryList;
  