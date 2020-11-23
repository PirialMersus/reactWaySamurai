import React from "react";
// import s from "./Music.module.css";

type PropsType = {
    group: string
    song: string
}

const Music: React.FC<PropsType> = ({group, song}) => {
    return (
        <div>
            <h3>Music</h3>
            <h5>{group}</h5>
            <p>{song}</p>
        </div>
    );
};

Music.defaultProps = {
    group: 'Red Hot Chili Papers',
    song: 'Hello world!'
}

export default Music;