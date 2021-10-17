import cls from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={cls.item}>
      <img
        src="http://sun9-39.userapi.com/c1266/g1580685/a_122350b3.jpg"
        alt="anyway"
      />
      {props.message}
      <div>
        <span>{props.likeCount} likes</span>
      </div>
    </div>
  );
};

export default Post;
