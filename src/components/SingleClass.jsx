const SingleClass = ({ singleClass, handleSelect, disableSelect }) => {
  const { image, name, instructor, availableSeats, enrolledStudents, price } =
    singleClass;

  return (
    <div
      className={` border border-[#fb00d993] rounded-lg ${
        availableSeats === 0 && "bg-red-300"
      }`}
    >
      <figure>
        <img src={image} alt="car!" className="h-60 w-full rounded-t-lg" />
      </figure>
      <div className="p-4 space-y-2">
        <h2 className="card-title">{name}</h2>
        <p>
          <span className="font-bold">Instructor : </span>
          {instructor}
        </p>
        <p>
          <span className="font-bold">Available Seats :</span> {availableSeats}
        </p>
        <p>
          <span className="font-bold">Enrolled :</span> {enrolledStudents}
        </p>
        <p>
          <span className="font-bold">Price :</span> ${price}
        </p>
        <div className="card-actions justify-end"></div>
        <button
          onClick={() => handleSelect(singleClass)}
          className="custom-btn-outline"
          disabled={availableSeats === 0 || disableSelect}
        >{` ${availableSeats === 0 ? "Unavailable" : "Select"}`}</button>
      </div>
    </div>
  );
};

export default SingleClass;
