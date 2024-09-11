import { useContext, useRef } from "react";
import { PostListContext } from "./store/post-list-data";

function CreatePost() {
  const { addPost } = useContext(PostListContext);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const numberOfReactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const numberOfReactions = numberOfReactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    // addPost(userId, postTitle, postBody, numberOfReactions, tags);

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: numberOfReactions,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        addPost(data);
      });
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter Your User Id
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your User ID"
            ref={userIdElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Post Title"
            ref={postTitleElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postContent" className="form-label">
            Post Content
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Post Content"
            ref={postBodyElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numberOfReactions" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="How many people reacted to this post"
            ref={numberOfReactionsElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Plese enter Tags using space"
            ref={tagsElement}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;
