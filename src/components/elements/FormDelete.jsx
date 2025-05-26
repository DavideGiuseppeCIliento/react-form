export default function FormDelete({ postDelete }) {
  return (
    <button className="btn btn-sm btn-danger mt-3" onClick={postDelete}>
      Cancella
    </button>
  );
}
