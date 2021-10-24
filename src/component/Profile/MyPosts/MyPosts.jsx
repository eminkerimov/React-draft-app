import cls from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {



  let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

  return (
      <div>
        My Posts
        <div>
          <textarea name="post" cols="20" rows="5"></textarea>
          <button>Add Post</button>
        </div>
        <div className={cls.posts}>
          { postsElements}
        </div>
      </div>
  );
};

export default MyPosts;
