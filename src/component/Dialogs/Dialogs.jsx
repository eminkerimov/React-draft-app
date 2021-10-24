import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import cls from "./Dialogs.module.css";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.state.messages.map ( m => <Message message={m.message} id={m.id} />);

  return (
    <div className={cls.dialogs}>
      <div className={cls.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={cls.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
