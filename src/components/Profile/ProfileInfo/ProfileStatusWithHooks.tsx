import React, {ChangeEvent, useEffect, useState} from "react";

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status])

    const activateMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);

    }

    return (
        <div>
            {!editMode &&
            <div><b>Status: </b><span onDoubleClick={activateMode}>{props.status || "--------"}</span></div>}

            {editMode && <div>
                <input autoFocus={true}
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       value={status}/>
            </div>}
        </div>
    );

};

export default ProfileStatusWithHooks;

// Колесо, стойки, подтягивания на турнике, выпрыжки колени к плечам, Лотос, закрытый лотос.