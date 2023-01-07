import React from "react";
import styles from '../Views/Home.module.scss';
import { Avatar, Image, Button } from 'antd';

const Slytherin = ({ slytherin }) => {

    return (
        <div className={styles["house"]}>
            <h1>SLYTHERIN</h1>
            <div>
                {Array.isArray(slytherin) && slytherin?.splice(0, 4)?.map(character => (
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
                    slytherin?.error && (
                        <div>
                            <Button type="primary">Reintentar</Button>
                            <h3>{slytherin.error}</h3>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default Slytherin;