import React from "react";
import "./Post.scss";
// import userImg from "../../images/user.jpg";
import { FaShareAlt } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
const Post = () => {
  return (
    <>
      <div className="post-container">
        <div class="post">
          <div class="post-author">
            {/* <img src={userImg} alt="User Profile" /> */}
            <h4>User Name</h4>
          </div>

          <div class="post-content">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              vero laboriosam sapiente ipsam, impedit obcaecati assumenda animi
              dignissimos molestias aperiam, voluptates eveniet laborum nam
              inventore quos quidem harum explicabo vel? Voluptates illum
              veritatis officia rerum delectus. Voluptas, vero doloribus.
              Perspiciatis nam animi odit.
            </p>
          </div>

          <div class="post-actions">
            <span class="heart-btn">
              <div className="logo like">
                <AiFillLike />
              </div>
              &nbsp; Like
            </span>
            <span class="comment-btn">
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
            </span>
          </div>

          <div class="comment-box">
            <textarea placeholder="Write a comment..."></textarea>
            <button>Post Comment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;