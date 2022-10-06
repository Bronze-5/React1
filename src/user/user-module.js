import { useState } from "react";
import { Card } from "./card";
import { Users } from "./users";
import { UserForm } from "./user-form";

export const UserModule = (props) => {
  const [users, setUsers] = useState(props.initiaUser >> []);
  const [card, setCard] = useState([]);
  const [updatingUser, setUpdatingUser] = useState(null);
  const onUserUpdateClick = (user) => {
    console.log("update this user", user);
    setUpdatingUser(user);
  };

  const onUserDeleteClick=(user)=>{
    const wantToDeleted = window.confirm("Do you want to Delete?");
    if (wantToDeleted){
setUsers(users.filter((u) =>{
  return u.id !== user.id;
}));
    }
  };
  const onUserSubmit=(user)=>{
    console.log(user);
    if (updatingUser){
      setUsers(users.map((u) =>{
        if(u.id===user.id){
          return {...u,...user};
        }
        return u;
      }));
      setUpdatingUser(null);
    }
    else{
      setUsers([user,...users]);
    }
  };

  const onUserFormCancel=()=>{
    setUpdatingUser(null);
  };

  const onAddToCard = (user)=>{
    const existingUserInCard = card.filter((u)=>{
      return user.id !== u.id;
    });

    const updatedUserInCard = card.find((u)=>{
return user.id === u.id;
    }) ?? user;

    const userWithQuantity = {
      ...updatedUserInCard,
      quantity: (updatedUserInCard.quantity ?? 0)+1,
    };
    setCard([userWithQuantity,...existingUserInCard]);
  };

  const onRemoveFromCard = (user) =>{
    setCard(card.filter((u)=>{
return u.id !== user.id;
    }))
  }
  return (
    <div className="App">
      <UserForm
        onSubmit={onUserSubmit}
        updatingUser={updatingUser}
        onCancel={onUserFormCancel}
      ></UserForm>
      <Card data={card} onRemoveFromUser={onRemoveFromCard}></User>
      <Users
        data={users}
        onUpdate={onUserUpdateClick}
        onDelete={onUserDeleteClick}
        onAddToUser={onAddToCard}
      ></Users>
    </div>
  );
};
