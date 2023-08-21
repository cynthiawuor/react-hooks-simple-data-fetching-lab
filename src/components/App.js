import React, {useEffect, useState} from 'react';

const API_URL = "https://images.dog.ceo/breeds/bulldog-english/mami.jpg"

//when the App component renders (only do this once)
//make a GET https://images.dog.ceo/breeds/bulldog-english/mami.jpg
//set the image in state

function App() {
    const [dogImageUrl, setDogImageUrl] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://images.dog.ceo/breeds/bulldog-english/mami.jpg")
        //.then((response) => response.json())
      .then((data) => {
        setDogImageUrl("https://images.dog.ceo/breeds/bulldog-english/mami.jpg");
        setIsLoading(false);
      });
    }, 
    [])

    return (
        <div className="App">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <img src={dogImageUrl} alt="A Random Dog" />
          )}
        </div>
      );
    }

export default App
