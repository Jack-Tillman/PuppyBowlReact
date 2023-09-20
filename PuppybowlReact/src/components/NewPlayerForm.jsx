import { useNavigate } from "react-router-dom";
import { addNewPlayer } from "../API";
import { useState, useEffect } from "react";

export const NewPlayerForm = () => {
  //track whether submission was successful or not  
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

   //tracks user input and places name and breed values in an object
   const [formInput, setFormInput] = useState({
    name: "",
    breed: "",
  });

  //tracks errors associated with user input for name and breed
  const [formError, setFormError] = useState({
    name: "",
    breed: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({
        //spread operator to make a copy of formInput object
      ...formInput,
      //[name] / [breed]: (user's input for name / breed) => name: userObject.name, breed: userObject.breed
      [name]: value,
    });
  };

  const navigate = useNavigate();
  
  async function addNewPlayerToRoster(formInput) {
    const inputError = {
      name: "",
      breed: "",
    };

    if (formInput.name.length < 1) {
      setFormError({
        ...inputError,
        name: "Name must be at least one character long",
      });
      return;
    }

    if (formInput.breed.length < 1) {
      setFormError({
        ...inputError,
        breed: "Breed must be at least one character long",
      });
      return;
    }

    if (formInput.name.length > 0 && formInput.breed.length > 0) {
      try {
        console.log(formInput);
        const response = await addNewPlayer(formInput);
        console.log(response);
        if (response.success) {
          setSubmissionSuccess(true);
          navigate(`..`);
        } else {
          setSubmissionSuccess(false);
          alert("That dog is already on the roster!");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <main className="form-main">
      <div className="form-container">
        <h3 className="h3-form">Register</h3>
        <form
          className="new-player-form"
          onSubmit={(e) => {
            e.preventDefault();
            addNewPlayerToRoster(formInput);
          }}
        >
          <label className="all-labels name-label" htmlFor="name">
            Name
            {/* line below ensures the prompt disappears once user enters 8 characters */}
            {formInput.name.length < 1 && (
              <span className="form-setup">
                {" "}
                • Dog names must be at least 1 character long.
              </span>
            )}
            <input
              className="form-input"
              type="text"
              placeholder="Enter your dog's name"
              name="name"
              minLength="1"
              maxLength="205"
              value={formInput.name}
              onChange={(e) => {
                handleUserInput(e.target.name, e.target.value);
              }}
            />
            {/*Span with error message will render ONLY if there is an error with the name*/}
            {formError.name && <span className="err">{formError.name}</span>}
          </label>

          <label className="all-labels" htmlFor="breed">
            Breed
            {formInput.breed.length < 1 && (
              <span className="form-setup">
                {" "}
                • Enter a breed name longer than 0 characters!
              </span>
            )}
            <input
              className="form-input"
              type="breed"
              placeholder="Enter a valid breed"
              name="breed"
              minLength="1"
              maxLength="205"
              value={formInput.breed}
              onChange={(e) => {
                //when user enters password, pass the name + value of event as arguments to handleUserInput function
                handleUserInput(e.target.name, e.target.value);
              }}
            />
            {/*Error with password input will render span with error message */}
            {formError.breed && <span className="err">{formError.breed}</span>}
          </label>
          <button id="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
      {submissionSuccess && (
        <div className="welcome-notification">Puppy successfully added!</div>
      )}
    </main>
  );
};
