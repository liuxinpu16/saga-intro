import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ handleFormSubmit }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (firstName && lastName) {
      handleFormSubmit(firstName, lastName);
    }
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First name: </label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      ></input>
      <label>Last name: </label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      ></input>
      <button>submit</button>
    </form>
  );
};

export default Form;
