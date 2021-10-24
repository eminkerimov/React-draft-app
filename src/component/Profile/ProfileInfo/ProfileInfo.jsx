import cls from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={cls.content_img}
          src="https://wallpaperfordesktop.com/wp-content/uploads/2021/05/Joker-Wallpaper-Download.jpg"
          alt="main"
        />
      </div>
      <div>Ava + desc</div>
    </div>
  );
};

export default ProfileInfo;
