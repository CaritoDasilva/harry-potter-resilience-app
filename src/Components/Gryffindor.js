import React from "react";
import styles from '../Views/Home.module.scss';
import { Avatar, Image, Button } from 'antd';

const Gryffindor = ({ gryffindor }) => {
console.log("🚀 ~ file: Gryffindor.js:5 ~ Gryffindor ~ props", gryffindor)

    return (
        <div className={styles["house"]}>
            <h1>GRIFFINDOR</h1>
            <div>
                {Array.isArray(gryffindor) && gryffindor?.splice(0, 4)?.map(character => (
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
                )) }  
                {
                    gryffindor?.error && (
                        <div>
                            <Button type="primary">Reintentar</Button>
                            <h3>{gryffindor.error}</h3>
                        </div>
                    )
                }              
            </div>
        </div>
    )
};

export default Gryffindor;