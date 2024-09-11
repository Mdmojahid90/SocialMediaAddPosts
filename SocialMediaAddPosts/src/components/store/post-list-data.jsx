import { createContext, useEffect, useReducer } from "react";

export const PostListContext = createContext({
  postData: [],
  addPost: () => {},
  deletePost: () => {},
});

const postReducer = (currState, action) => {
  let newPost = currState;
  if (action.type == "ADD") {
    // newPost = [
    //   {
    //     userId: action.payload.userId,
    //     title: action.payload.title,
    //     body: action.payload.body,
    //     reactions: action.payload.reactions,
    //     tags: action.payload.tags,
    //   },
    //   ...currState,
    // ];

    newPost = [action.payload.post, ...currState];
  } else if (action.type == "DELETE") {
    newPost = currState.filter((item) => item.userId != action.payload.userId);
  } else if (action.type == "ADDINITIALPOSTS") {
    newPost = action.payload.posts;
  }

  return newPost;
};

const PostDataProvider = ({ children }) => {
  const [postData, dispatch] = useReducer(postReducer, []);

  // const addPost = (userId, postTitle, postBody, numberOfReactions, tags) => {
  //   const newpost = {
  //     type: "ADD",
  //     payload: {
  //       userId: userId,
  //       title: postTitle,
  //       body: postBody,
  //       reactions: numberOfReactions,
  //       tags: tags,
  //     },
  //   };
  //  dispatch(newpost);
  // };

  const addPost = (data) => {
    const newpost2 = { type: "ADD", payload: { post: data } };
    dispatch(newpost2);
  };

  const deletePost = (userId) => {
    dispatch({ type: "DELETE", payload: { userId } });
  };

  const addIntialallPost = (posts) => {
    dispatch({ type: "ADDINITIALPOSTS", payload: { posts: posts } });
  };

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addIntialallPost(data.posts));
  }, []);

  return (
    <PostListContext.Provider value={{ postData, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostDataProvider;
