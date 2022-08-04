import React from 'react';
import logo from './logo.svg';
import './App.css';
const just_me = {
  bio: {
    name: {
      name: 'Nina',
      surname: 'Chyhrina'
    },
        birth: {
          birth_date: "22/09/1985",
          birth_place: "Lutsk",

        },
    contacts: {
      phone: "2004-11-09",
      mail: "retired",
      addres: "Gecko",

    }
}}
function App() {
  return (
    <div className="App">
      <h1>Hi, I'm {just_me.bio.name.name} {just_me.bio.name.surname} </h1>
      <h2>My Bio</h2>
      <h3>Birth</h3>
      <p>{just_me.bio.birth.birth_date}</p>
      <p>{just_me.bio.birth.birth_place}</p>
      <h3>Contacts</h3>
      <p>Phone:  {just_me.bio.contacts.phone}</p>
      <p>Address: {just_me.bio.contacts.addres}</p>
      <p>E-mail: {just_me.bio.contacts.mail}</p>
    </div>
  );
}

export default App;
