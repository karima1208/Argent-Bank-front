import React, { useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/userActions";

const User = () => {
  const dispatch = useDispatch();
  const { token, user, updateUserLoading, errorMessage } = useSelector(
    (state) => state.user
  );
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const onUpdateUSer = () => {
    const body = {
      firstName,
      lastName,
    };
    const onClose = () => setShowForm(false);
    updateProfile(token, body, onClose, dispatch);
  };
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br/>
          {user.firstName} {user.lastName}!
        </h1>
        <button className="edit-button" onClick={() => setShowForm(true)}>
          Edit Name
        </button>
        {showForm && (
          <form className="updateForm" onSubmit={onUpdateUSer}>
            <div className="updateFormInput">
              <div className="input-wrapper">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
            <div className="updateUserButtons">
              <button
                className={
                  updateUserLoading
                    ? "sign-in-button-disable"
                    : "sign-in-button"
                }
                type="submit"
                disabled={updateUserLoading}
              >
                Save
              </button>
              <button
                className={"sign-in-button"}
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default User;
