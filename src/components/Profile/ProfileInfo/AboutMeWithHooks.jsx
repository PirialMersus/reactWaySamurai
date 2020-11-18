// import React, {useEffect, useState} from "react";
//
// const AboutMeWithHooks = (props) => {
//
//     const [editMode, setEditMode] = useState(false);
//     const [status, setStatus] = useState(props.status);
//
//     useEffect( () => {
//         setAboutMe(props.status);
//     }, [props.status])
//
//     const activateMode = () => {
//         setEditMode(true);
//     }
//
//     const deactivateEditMode = () => {
//         setEditMode(false);
//         props.updateStatus(status);
//     }
//
//     const onStatusChange = (e) => {
//         setStatus(e.currentTarget.value);
//
//     }
//
//     return (
//         <div>
//             {!editMode &&
//             <div><span onDoubleClick={activateMode}>{props.status || "--------"}</span></div>}
//
//             {editMode && <div>
//                 <input autoFocus={true}
//                        onBlur={deactivateEditMode}
//                        onChange={onStatusChange}
//                        value={status}/>
//             </div>}
//         </div>
//     );
//
// };
//
// export default AboutMeWithHooks;
