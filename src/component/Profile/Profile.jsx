import MyPosts from "./MyPosts/MyPosts";
import cls from "./Profile.module.css"

const Profile = () => {
  return (
    <div>
      <div>
        <img className={cls.content_img} src="https://wallpaperfordesktop.com/wp-content/uploads/2021/05/Joker-Wallpaper-Download.jpg" alt="main"/>
      </div>
      <div>Ava + desc</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
