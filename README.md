Hostedon: https://contact-list-0gs7.onrender.com/
# Contact List

A simple React application for managing contacts. Users can add, edit, and delete contacts with ease. The application uses Redux for state management and React Router for navigation.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Redux](#redux)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new contacts
- Edit existing contacts
- Delete contacts
- Form validation with feedback messages
- Persistent state management using Redux
- Responsive design with Bootstrap

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yogeshjaguri/contact-list.git
    cd contact-list
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Use the interface to add, edit, or delete contacts.
3. Form validation will provide feedback if required fields are missing or if there are duplicate entries.

## Components

- **App**: Main component that sets up routing.
- **Header**: Navigation bar.
- **Footer**: Stays at the bottom of the page.
- **Home**: Displays the list of contacts.
- **AddContact**: Form to add a new contact.
- **EditContact**: Form to edit an existing contact.

## Redux

- **actions**: Contains the action types and creators.
- **reducers**: Defines how the state changes in response to actions.
- **store**: Configures the Redux store.

### Example Redux Structure

```javascript
// actions.js
export const ADD_CONTACT = "ADD_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

// reducer.js
const initialState = [];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case UPDATE_CONTACT:
      return state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload);
    default:
      return state;
  }
};

export default contactReducer;

// store.js
import { createStore } from "redux";
import contactReducer from "./reducers";

const store = createStore(contactReducer);

export default store;
