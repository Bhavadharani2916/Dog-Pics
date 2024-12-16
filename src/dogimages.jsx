import React, {useState,useEffect} from "react";
import axios from "axios"; 
const Dogpics =() => {
    const [selectedBreed, setSelectedBreed] = useState("Random");
    const[dogImage, setDogImage] = useState("");
    const fetchDogImage = async(breed) => {
        try {
            const url =
            breed === "Random"
            ? "https://dog.ceo/api/breeds/image/random"
            :`https://dog.ceo/api/breed/${breed.tolowerCase()}/images/random`;
            const response = await axios.get (url);
            setDogImage(response.data.message);
        } catch (error) {
            console.error("error fetching dog image:",error);
        }
    };
        
    useEffect(() => {
        fetchDogImage (selectedBreed);

    },[selectedBreed]);


    const handleBreedchange = (event) => {
        setSelectedBreed(event.target.value);
    };

    const handleNextClick = () => () => {
        fetchDogImage(selectedBreed);
    };
    return(
        <div style={{textAlign:"center",padding:"10px",fontSize:"150%"}}>
            <h1>DOG PICS</h1>
            <select
            value = {selectedBreed}
            onChange={handleBreedchange}
            style={{padding:"10px",marginBottom:"20px"}}
            >
                <option value="Random">Random</option>
                <option value="Beagle">Beagle</option>
                <option value="Boxer">Boxer</option>
                <option value="Dalmation">Dalmation</option>
                <option value="Husky">Husky</option>
                <option value="African">African</option>
                <option value="Clumber">Clumber</option>
                <option value="Chow">Chow</option>
                <option value="Shepherd Australian">Shepherd Australian</option>


            </select>
            <div>
                {dogImage && (
                    <img 
                    src={dogImage}
                    alt="dog"
                    style={{
                        width: "400px",
                        height: "400px",
                        objectFit: "cover",
                        borderRadius: "15px",

                    }}
                    />
                )}
            </div>
            <button onClick={handleNextClick}
            style={{marginTop:"20px", padding:"10px 20px", cursor:"pointer"}}>Next</button>

        </div>
    );
};
export default Dogpics;