import PostsGrid from "../elements/PostsGrid";
import FormTitlePost from "../elements/FormTitlePost";
import articles from "../../data/data";

export default function Main() {
  return (
    <>
      <div className="container d-flex flex-column">
        <div className="row ">
          {articles.map((post) => (
            <PostsGrid title={post.titolo} key={post.id} />
          ))}
        </div>

        <FormTitlePost />
      </div>
    </>
  );
}
