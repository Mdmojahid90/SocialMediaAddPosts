import { useContext } from "react";
import { PostListContext } from "./store/post-list-data";

function Post({ postItem }) {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card" style={{ width: "70%" }}>
      <div className="card-body">
        <h5 className="card-title">{postItem.title}</h5>
        <p className="card-text">{postItem.body}</p>
        {postItem.tags.map((item) => (
          <span key={item} className="badge text-bg-warning">
            {item}
          </span>
        ))}
        <div className="alert alert-info" role="alert">
          {postItem.reactions}
        </div>
      </div>
      <button
        className="btn btn-danger"
        onClick={() => deletePost(postItem.userId)}
      >
        Delete
      </button>
    </div>
  );
}

export default Post;
