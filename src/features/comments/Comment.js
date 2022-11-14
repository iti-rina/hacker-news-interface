import { useEffect, useState } from "react";
import { decode } from "html-entities";
import { fetchComment } from "./fetchComments";
import { FaChevronUp } from "react-icons/fa";

export default function Comment({ commentId }) {
  const [comment, setComment] = useState({});
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    fetchComment(commentId).then(data => setComment(data));
  }, [commentId]);

  if (comment?.deleted) return null;

  const text = cutTegs(decode(comment?.text));

  const handleShowMore = () => {
    if (comment?.kids) {
      setShowMore(!showMore);
    }
    return null;
  }

  return (
    <div className="single-comment" style={{ marginLeft: "25px", marginTop: "15px"}}>
      <div
        style={{ color: '#8F8F8F', margin: '0 0 4px 0', fontSize: '14px' }}
      >
        {comment?.by}
      </div>
      <p className="comment__text" onClick={handleShowMore}>{text}</p>

      {comment?.kids ? <button onClick={() => setShowMore(!showMore)} className="comment__show-more-btn">{!showMore ? `View Replies (${comment.kids.length})` : <FaChevronUp />}</button> : null}
      
      {showMore ? comment?.kids.map(commentId => <Comment commentId={commentId} key={commentId} />) : null}
    </div>
  ) 
}

function cutTegs(str) {
  const regex = /( |<([^>]+)>)/ig;
  return str.replace(regex, " ");
}
