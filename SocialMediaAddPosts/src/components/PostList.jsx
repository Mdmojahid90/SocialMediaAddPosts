import { useContext } from "react";

import Post from "./Post";
import Welcomemsg from "./Welcomemsg";
import { PostListContext } from "./store/post-list-data";

function PostList() {
  const { postData } = useContext(PostListContext);
  return (
    <>
      {postData.length === 0 && <Welcomemsg />}
      {postData.map((postItem) => (
        <Post postItem={postItem} />
      ))}
    </>
  );
}

export default PostList;
