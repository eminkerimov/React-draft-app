import cls from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
  return (
      <div>
        My Posts
        <div>
          <textarea name="post" cols="20" rows="5"></textarea>
          <button>Add Post</button>
        </div>
        <div className={cls.posts}>
          <Post message="Hello !!!" likeCount="19"/>
          <Post message="Hii" likeCount="14"/>
          <Post message="New Car???" likeCount="29"/>
          <Post message="What's up man" likeCount="39"/>
        </div>
      </div>
  );
};

export default MyPosts;
