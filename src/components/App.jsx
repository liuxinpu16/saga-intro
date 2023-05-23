import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Form from "./Form";

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.users.items);
  useEffect(() => {
    dispatch({ type: "get_users_request" });
  }, []);

  const handleFormSubmit = (firstName, lastName) => {
    dispatch({
      type: "create_user",
      payload: { firstName, lastName },
    });
  };

  const handleDelete = (id) => {
    dispatch({ type: "delete_user", payload: { id } });
  };

  return (
    <>
      <div style={{ margin: "0 auto", padding: "20px" }}>
        <Form handleFormSubmit={handleFormSubmit} />
        {items
          .slice()
          .sort((a, b) => {
            if (a.firstName > b.firstName) {
              return 1;
            } else if (a.firstName < b.firstName) {
              return -1;
            } else if (a.lastName > b.lastName) {
              return 1;
            } else if (a.lastName < b.lastName) {
              return -1;
            } else {
              return 0;
            }
          })
          .map((i) => (
            <p key={i.id}>
              {i.firstName} {i.lastName}
              {"   "}
              <button onClick={() => handleDelete(i.id)}>Delete</button>
            </p>
          ))}
      </div>
    </>
  );
}

export default App;
