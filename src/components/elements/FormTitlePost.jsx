import articles from "../../data/data";
import PostsGrid from "./PostsGrid";
import { useState } from "react";

const initialValue = {
  id: Date.now(),
  titolo: "",
  corpo: "",
};

export default function FormTitlePost() {
  // DEFAULT NUOVO POST-----
  const [newPost, setNewPost] = useState(initialValue);

  //  DICHIARAZIONE ARRAY POSTS-----
  const [arrayPosts, setArrayPosts] = useState(articles);

  //   FUNZIONE AGGIUNTA ALL'ARRAY DELL'OGGETTO----------------------------
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // puschamo l'array nuovo
    setArrayPosts([...arrayPosts, newPost]);
    setNewPost(initialValue);
  };

  //   FUNZIONE CREAZIONE DELL'OGGETTO----------------------------
  const handleFormData = (e) => {
    // Creazine dell'oggetto
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  //   FUNZIONE CANCELLAZIONE DELL'OGGETTO----------------------------
  const handleDelete = (id) => {
    setArrayPosts(arrayPosts.filter((post) => post.id !== id));
  };

  return (
    <>
      {/* STAMPA NOMI ARTICOLI */}
      <div className="container d-flex flex-column">
        <div className="row">
          {arrayPosts.map((post) => (
            <PostsGrid
              title={post.titolo}
              key={post.id}
              postDelete={() => handleDelete(post.id)}
            />
          ))}
        </div>
      </div>

      <div className="row bordo-soft p-3 mt-5 text-white">
        <div className="col">
          {/* FORM ---------------------------- */}
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
                value={newPost.titolo}
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
                value={newPost.corpo}
                onChange={handleFormData}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Pubblica Nuovo Articolo
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
