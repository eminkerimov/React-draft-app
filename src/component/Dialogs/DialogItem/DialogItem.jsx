import { NavLink } from "react-router-dom";
import cls from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return  <div className={cls.dialog + "" + cls.active}>
    <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;