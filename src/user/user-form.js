import { useEffect } from "react";
import { useState } from "react";
import "./user-form.css";
export const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const onFirstNameChange = (event) => setFirstName(event.target.value);

  const [lastName, setLastName] = useState("");
  const onLastNameChange = (event) => setLastName(event.target.value);

  const [workAt, setWorkAt] = useState("");
  const onWorkAtChange = (event) => setWorkAt(event.target.value);

  const [school, setSchool] = useState("");
  const onSchoolChange = (event) => setSchool(event.target.value);

  const [city, setCity] = useState("");
  const onCityChange = (event) => setCity(event.target.value);

  const [country, setCountry] = useState("");
  const onCountryChange = (event) => setCountry(event.target.value);

  const [address, setAddress] = useState("");
  const onAddressChange = (event) => setAddress(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

      let id = Math.random();
    if (props.updatingUser) {
      id = props.updatingUser.id;
    }

    props.onSubmit({
      id,
      firstName,
      lastName,
      workAt,
      school,
      city,
      country,
      address,
    });

    setFirstName("");
    setLastName("");
    setWorkAt("");
    setSchool("");
    setCity("");
    setCountry("");
    setAddress("");
  };

  const onCancel = (event) => {
    event.preventDefault();
    setFirstName("");
    setLastName("");
    setWorkAt("");
    setSchool("");
    setCity("");
    setCountry("");
    setAddress("");

    props.onCancel();
  };

  console.log(props.updatingProduct);

  return (
    <form className="user-form">
      <h1>User Card</h1>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        firstName="firstName"
        id="firtName"
        value={firstName}
        onChange={onFirstNameChange}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        lastName="lastName"
        id="lastName"
        value={lastName}
        onChange={onLastNameChange}
      />

      <label htmlFor="workAt">Work At</label>
      <input
        type="text"
        workAt="workAt"
        id="workAt"
        value={workAt}
        onChange={onWorkAtChange}
      />

      <label htmlFor="school">School</label>
      <input
        type="text"
        school="school"
        id="school"
        value={school}
        onChange={onSchoolChange}
      />

      <label htmlFor="city">City</label>
      <input
        type="text"
        city="city"
        id="city"
        value={city}
        onChange={onCityChange}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        country="country"
        id="country"
        value={country}
        onChange={onCountryChange}
      />

      <label htmlFor="address">Address</label>
      <input
        type="text"
        address="address"
        id="address"
        value={address}
        onChange={onAddressChange}
      />

      <button onClick={onSubmit}>Submit</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};
