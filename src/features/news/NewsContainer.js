import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts, selectNewsIds } from "./newsSlice";
import StoryPreview from "./StoryPreview";


const NewsContainer = () => {
  const newsIds = useSelector(selectNewsIds);

  const content = newsIds.map(storyId => <StoryPreview key={storyId} storyId={storyId} />);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchPosts());

    const timer = setInterval(() => dispatch(fetchPosts()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
      <div className="news-container">
        {content}
      </div>
  );
}

export default NewsContainer;