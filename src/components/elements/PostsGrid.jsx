import FormDelete from "../elements/FormDelete";

export default function PostsGrid({ title, postDelete }) {
  return (
    <div className="col">
      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body">
          <h5 className="card-title text-secondary">{title}</h5>
          <FormDelete postDelete={postDelete}></FormDelete>
        </div>
      </div>
    </div>
  );
}
