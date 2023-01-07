import React, { useState, useEffect } from "react";
import styles from '../Views/Home.module.scss';
import { Avatar, Image, Button } from 'antd';
import { getHouseCharacters } from "../services/harry-potter-services";

const Ravenclaw = ({ ravenclaw }) => {
console.log("🚀 ~ file: Ravenclaw.js:6 ~ Ravenclaw ~ ravenclaw", ravenclaw)
    const [characters, setCharacters] = useState(ravenclaw);
    const [error, setError] = useState(ravenclaw?.error)
    const retryData = async() => {
        const charactersRetry = await getHouseCharacters('ravenclaw');
        console.log("🚀 ~ file: Ravenclaw.js:12 ~ retryData ~ charactersRetry", charactersRetry)
        setCharacters(charactersRetry.data);
        setError();
    }

    useEffect(() => {
        setError(ravenclaw?.error);
        setCharacters(ravenclaw);
        console.log("🚀 ~ file: Ravenclaw.js:20 ~ Ravenclaw ~ error", error)
    }, [ravenclaw])
    return (
        <div className={styles["house"]}>
            <h1>RAVENCLAW</h1>
            <div className={error && styles["error-container"]}>
                { Array.isArray(characters) && characters.splice(0, 4).map(character => (
                    <div>
                        <Avatar
                            shape="square"
                            size={100}
                            icon={<Image
                                width={100}
                                src={character.image}
                            />}
                        />
                    </div>
                ))}
                {
                    error  && (
                        <div>
                            <Button onClick={retryData} type="primary">Reintentar</Button>
                            <h3>{ravenclaw.error}</h3>
                        </div>   
                    )
                }
            </div>
        </div>
    );

};

export default Ravenclaw;