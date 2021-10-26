import cls from "./MyPosts.module.css"
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  }

  let onPostChange = () => {
    console.log();
  }

  return (
      <div>
        My Posts
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} name="post" cols="20" rows="5"/>
          <button onClick={ addPost }>Add Post</button>
        </div>
        <div className={cls.posts}>
          { postsElements}
        </div>
      </div>
  );
};

export default MyPosts;
