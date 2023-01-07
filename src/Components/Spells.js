import React from "react";
import styles from '../Views/Home.module.scss';
import { Tag, Button } from 'antd';

const Spells = ({ spells }) => {

    return (
        <div className={styles["spells"]}>
            <h1>SPELLS</h1>
            <div className={spells?.error && styles["error-container"]}>
                {Array.isArray(spells) && spells.splice(0, 4).map(spell => (
                    <div>
                        <Tag color="orange">{spell.name}</Tag>
                    </div>
                ))}
                {
                    spells?.error && (
                        <div>
                            <Button type="primary">Reintentar</Button>
                            <h3>{spells.error}</h3>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default Spells;