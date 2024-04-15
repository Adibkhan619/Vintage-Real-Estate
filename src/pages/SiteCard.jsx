


const SiteCard = ({ site }) => {
  const { id, category,img,site_title, description } = site;
  console.log(id, category);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{site_title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteCard;
