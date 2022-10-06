import "./user.css"

export const User = (props)=>{
    const getUser = () => {
        return{
            id: props.id;
            firstName:props.firstName;
            lastName:props.lastName;
            workAt:props.workAt;
            school:props.school;
            city:props.city;
            country:props.country;
            address:props.address;

        }
    }
    return(
        <div className="user-container">
<div className="user-img">
    <img src={props.img ?? "user-avata.jpg"} alt=""/>
</div>
<div className="user-info">
    <div className="user-firstName">First Name: {props.firstName}</div>
    <div className="user-lastName">Last Name: {props.lastName}</div>
    <div className="user-workAt">Work At: {props.workAt}</div>
    <div className="user-school">School: {props.school}</div>
    <div className="user-city">City: {props.city}</div>
    <div className="user-country">Country: {props.country}</div>
    <div className="user-address">Address: {props.address}</div>
    {props.quantity && (
        <div className="user-firstName">Quantity: {props.quantity}</div>
    )}
    {props.onUpdate && <button onClick={onUpdate}>Update</button>}
    {props.onDelete && <button onClick={onDelete}>Delete</button>}
    {props.onAddToCard &&(
        <button onClick={onAddToCard}>Add to card</button>
    )}

    {props.onRemoveFromCard &&(
        <button onClick={onRemoveToCard}>Remove from card</button>
    )}
    </div>
        </div>

    );

};