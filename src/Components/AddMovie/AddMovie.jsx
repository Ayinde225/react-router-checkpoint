import "./addmovie.css";
import ReactStars from "react-rating-stars-component";
import { useRef, useState } from "react";

export default function AddMovie({ adding }) {
  let titleRef = useRef();
  let imgurlRef = useRef();
  let trailerurlRef = useRef();
  let posurlRef = useRef();
  let descRef = useRef();
  let [rate, setRate] = useState(0);
  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRate(newRating);
  };

  function submitted(ev) {
    ev.preventDefault();

    if (
      !titleRef.current.value ||
      !imgurlRef.current.value ||
      !trailerurlRef.current.value ||
      !descRef.current.value
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    let movieObject = {
      title: titleRef.current.value,
      trailer: trailerurlRef.current.value.replace("watch?v=", "embed/"),
      img: imgurlRef.current.value,
      description: descRef.current.value,
      posterURL: posurlRef.current.value,
      rating: rate,
    };

    adding(movieObject);

    titleRef.current.value = "";
    imgurlRef.current.value = "";
    trailerurlRef.current.value = "";
    descRef.current.value = "";
    posurlRef.current.value = "";
    setRate(0);
  }

  return (
    <div className="AddMovie">
      <form onSubmit={submitted}>
        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Titre
          </label>
          <div className="col-sm-10">
            <input
              name="title"
              ref={titleRef}
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="Titre"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Image
          </label>
          <div className="col-sm-10">
            <input
              ref={imgurlRef}
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="image"
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Bande-annonce sur Youtube
          </label>
          <div className="col-sm-10">
            <input
              ref={trailerurlRef}
              type="text"
              className="form-control"
              id="colFormLabel"
              placeholder="url du film sur youtube"
            />
          </div>
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            URL du Poste
          </span>
          <input
            ref={posurlRef}
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text">Description</span>
          <textarea
            ref={descRef}
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>

        <div className="rating">
          <h6> Note : </h6>
          <ReactStars
            count={10}
            onChange={ratingChanged}
            size={50}
            isHalf={true}
            activeColor="#ffd700"
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            AJOUTER LE FILM
          </button>
        </div>
      </form>
    </div>
  );
}
