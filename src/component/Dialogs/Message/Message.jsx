import cls from "./../Dialogs.module.css";

const Message = (props) => {
  return  <div className={cls.dialog}>{props.message}</div>
}

export default Message;