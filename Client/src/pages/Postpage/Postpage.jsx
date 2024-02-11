import React, { useEffect, useState } from "react";
import "./Postpage.scss";
import Post from "../../components/Post/Post";
import { useDispatch, useSelector } from "react-redux";
import {
  CreatePost,
  GetAllPost,
  OnclickShow,
  Upvote,
} from "../../components/redux/action/user";
import { FaShareAlt } from "react-icons/fa";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import userImg from "../../images/userImg.png";

const PostCard = (data) => {
  const [message, setMessage] = useState("");

  const CommentHandler = (e, id) => {
    e.preventDefault();

    console.log(message);
  };
  return (
    <div class="comment-box">
      <form action="" onClick={(e) => CommentHandler(e, data._id)}>
        <textarea
          placeholder="Write a comment..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};
const Postpage = () => {
  const [file, setFile] = useState("");
  const [content, setContent] = useState("");

  const { allpost } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllPost());
  }, [dispatch]);

  const changeImageHandler = (e) => {
    const temp_file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(temp_file);
    reader.onloadend = () => {
      setFile(temp_file);
    };
  };

  const CreatePostHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", content);
    formData.append("file", file);

    dispatch(CreatePost(formData));

    setContent("");
    setFile("");
  };

  const OnclickShow1 = async (id) => {
    console.log(id);
    await dispatch(OnclickShow(id));
    navigate("/onclickshow");
  };

  const upvote1Handler = (e, id) => {
    e.preventDefault();
    dispatch(Upvote(id));
    console.log(id, "for upvote");
  };

  return (
    <div className="sidePost">
      <div className="createPost">
        <form action="" onSubmit={CreatePostHandler}>
          <label htmlFor="">Create Post</label>
          <textarea
            name="content"
            type="text"
            className="anuj"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <input
            name="content"
            type="file"
            onChange={changeImageHandler}
          ></input>
          <button type="submit">Post</button>
        </form>
      </div>
      <div className="side2">
        {allpost &&
          allpost.map((item, index) => {
            return (
              <>
                <div className="post-container" key={index}>
                  <div class="post">
                    <div
                      class="post-author"
                      onClick={() => OnclickShow1(item.author)}
                    >
                      <h4>{item.username} </h4>
                    </div>
                    <div className="post-image">
                      <img src={item.postImg} alt="User Profile" />
                    </div>
                    <div class="post-content">
                      <p>{item.content}</p>
                    </div>

                    <div class="post-actions">
                      <span class="heart-btn">
                        <div
                          className="logo like"
                          onClick={(e) => upvote1Handler(e, item._id)}
                        >
                          <AiFillLike />
                        </div>
                        &nbsp; upvote
                      </span>

                      {/* <span class="heart-btn">
              <div className="logo like">
                <AiFillDislike />
              </div>
              &nbsp; dislike
            </span> */}
                      {/* <span class="comment-btn">
              <div className="logo">
                <FaCommentDots />
              </div>
              &nbsp; Comment
            </span>
            <span class="share-btn">
              <div className="logo">
                <FaShareAlt />
              </div>
              &nbsp; Share
            </span> */}
                    </div>
                    {item.comments &&
                      item.comments.map((data, index) => {
                        return <></>;
                      })}
                    <PostCard data={item} />
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Postpage;
