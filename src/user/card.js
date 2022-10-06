import "./user-card.css";
import{User} from "user";
export const UserCard = (props) => {
  return (
    <div>
      <h1>Cart</h1>
      {props.data.map((user) => (
        <User
          key={user.id}
          {...user}
          onRemoveFromUser={props.onRemoveFromUser}
        ></User>
      ))}
    </div>
  );
};
