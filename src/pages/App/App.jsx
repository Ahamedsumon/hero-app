
const App = ({data}) => {
    const {title, downloads, ratingAvg} = data
    return (
        <div className="card bg-base-100 shadow-sm">
      <figure className="px-2 pt-2">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Title: {title}</h2>
        <div className=" flex">
          <p>{downloads}</p>
          <p className="text-end">{ratingAvg}</p>
        </div>
      </div>
    </div>
    );
};

export default App;