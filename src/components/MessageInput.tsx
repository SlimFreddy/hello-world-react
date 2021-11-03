interface Props {
  msg: string;
  callBack: (event: any) => void;
}
const MessageInput = ({ msg, callBack }: Props) => {
  return (
    <div>
      <input
        type="text"
        value={msg}
        onChange={(e) => {
          callBack(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default MessageInput;
