import cls from "./Header.module.css";

const Header = () => {
    return (
    <header className={cls.header}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7M1r--N6wUvjWAlwK3oua8ish4VT9ubK2w&usqp=CAU" alt="logo" />
    </header>
    );
};

export default Header;