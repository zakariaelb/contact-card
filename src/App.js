import React from "react";
import './App.css';


function App() {
  const [contact, setContact] = React.useState({
    firstName:"Elon",
    lastName:"Musk",
    phone: "+ 1 226 5 464 744",
    email: "itsme@elom.com",
    isFavorite: false
  })
  let starIcon = contact.isFavorite ? "star-gold.png" : "star-white.png"
// function toggleFavorite(){
//   console.log("Toggle Favorite")
//   setContact(prevContact => {
//     return {
//       ...prevContact,
//       isFavorite: !prevContact.isFavorite
//     }
//   })
// }
///////////////or
function toggleFavorite(){
  console.log("Toggle Favorite")
  setContact(prevContact => ({
    ...prevContact,
    isFavorite: !prevContact.isFavorite
  }))
} 
return (
  <main>
    <article className="card">
      <img src="./images/user.png" className='card--image'/>
      <div className='card--info'>
        <img src={`../images/${starIcon}`}          
        className="card--favorite"
          onClick={toggleFavorite}        
        />
        <h2 className="card--name">
            {contact.firstName} {contact.lastName}
        </h2>
        <p className="card--contact">{contact.phone}</p>
        <p className="card--contact">{contact.email}</p>
      </div>
    </article>
  </main>
)
}

export default App;
