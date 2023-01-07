import React from "react";
import styles from '../Views/Home.module.scss';
import { Avatar, Image, Button } from 'antd';

const Hufflepuff = ({ hufflepuff }) => {
    let characters = hufflepuff

    return (
        <div className={styles["house"]}>
            <h1>HUFFLEPUFF</h1>
            <div>
                { Array.isArray(characters) && characters?.splice(5, 9)?.map(character => (
                    <div>
                        <Avatar 
                            shape="square"
                            size={100} 
                            icon={<Image
                                width={100}
                                src={character?.image}
                            />} 
                        />
                    </div>
                )) }  
                {
                    hufflepuff?.error  && (
                        <div>
                            <Button type="primary">Reintentar</Button>
                            <h3>{hufflepuff.error}</h3>
                        </div>   
                    )
                }              
            </div>
        </div>
    )
};

export default Hufflepuff;