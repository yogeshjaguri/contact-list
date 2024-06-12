import "../App.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id } = useParams();

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const handelSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkNumber = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.number === parseInt(number)
    );

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields!");
    }

    if (checkEmail) {
      return toast.error("This email already Exists!");
    }

    if (checkNumber) {
      return toast.error("This number already Exists!");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };

    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Contact updated successfully!!");
    navigate("/");
  };

  return (
    <div className="container mx-auto p-5 bg-dark">
      {currentContact ? (
        <>
          <h1 className="display-4 text-center text-warning fw-bold">
            Edit Contact {id}
          </h1>
          <div className="row">
            <div className="col-md-6 shadow mx-auto p-5 bg-light">
              <form className="text-center" onSubmit={handelSubmit}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    placeholder=" "
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label>Name</label>
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    placeholder=" "
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Email</label>
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    placeholder=" "
                    className="form-control"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <label>Phone Number</label>
                </div>
                <div className="form-group mb-3 d-flex">
                  <input
                    type="submit"
                    value="Update Contact"
                    className="btn btn-success"
                  />
                  <Link to="/" className="btn btn-danger mx-2">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center fw-bold">
          Contact with id {id} does not exist!!
        </h1>
      )}
    </div>
  );
};

export default EditContact;
