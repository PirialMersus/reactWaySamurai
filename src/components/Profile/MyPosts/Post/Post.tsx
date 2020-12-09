import React from "react";
import s from "./Post.module.css";

type PropsType = {
    message: string
    likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://demo.phpgang.com/crop-images/demo_files/pool.jpg"
        alt=""
      />
      {props.message}
      <div>
        <span className={s.d18}>likes {props.likesCount}</span>
      </div>
    </div>
  );
};
export default Post;
