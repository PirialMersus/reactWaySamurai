import React from "react";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return <div className={s.users}>
        <div className={s.paginatorUsers}>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
            /></div>
        <div>
            {
                users.map(u => <User key={u.id}
                                     user={u}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                />)
            }
        </div>
    </div>
}
export default Users;