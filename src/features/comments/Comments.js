import { useState, useEffect } from "react";
import { fetchComments } from "./fetchComments";
import Comment from "./Comment";
import "./style.css";

export default function Comments({ commentsIds, storyId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(commentsIds)
    .then(data => setComments(data));
  }, [commentsIds]);

  return (
    comments?.map(comment => ( <Comment commentId={comment.id} key={comment.id} /> ))
  );
}

