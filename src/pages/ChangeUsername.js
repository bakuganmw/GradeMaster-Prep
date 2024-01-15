import React, { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { useChangeName } from "../hooks/useChangeName";

const ChangeUsername = () => {
  const [newUserName, setNewUserName] = useState("");
  const { logout } = useLogout();
	const {changeName,error} = useChangeName();

  const handleSubmit = async (e) => {
    e.preventDefault();
		changeName(newUserName);
    logout();
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Zmień nazwę użytkownika</h3>
          <div className="form-group mt-3">
            <label>nazwa użytkownika</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Wprowadź nazwe użytkownika"
              onChange={(e) => setNewUserName(e.target.value)}
              value={newUserName}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary buttonLook">
              Zmień nazwę
            </button>
          </div>
          {error && <div className='text-danger'>{error}</div>}
        </div>
      </form>
    </div>
  );
};

export default ChangeUsername;
