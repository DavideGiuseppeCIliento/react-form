import articles from "../../data/data";
import { useState } from "react";

export default function FormTitlePost() {
  // DEFAULT NUOVO POST
  const [newPost, setNewPost] = useState({
    id: null,
    titolo: null,
    corpo: null,
  });

  //   FUNZIONE SUBMIT
  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Form funziona");
  };

  // FUNZIONE CONTROLLED ELEMENT
  const handleFormData = (e) => {
    setNewPost((newPost) => ({
      ...newPost,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="row bordo-soft p-3 mt-5 text-white">
      <div className="col">
        {/* FORM */}
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="titolo" className="form-label">
              Titolo Articolo
            </label>
            <input
              type="text"
              id="titolo"
              name="titolo"
              className="form-control"
              placeholder="Inserisci il titolo"
              onChange={handleFormData}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="corpo" className="form-label">
              Contenuto Articolo
            </label>
            <textarea
              id="corpo"
              name="corpo"
              className="form-control"
              rows="4"
              placeholder="Scrivi il contenuto dell'articolo"
              onChange={handleFormData}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Pubblica Nuovo Articolo
          </button>
        </form>
      </div>
    </div>
  );
}
