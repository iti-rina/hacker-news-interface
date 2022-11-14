import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import NewsContainer from "./features/news/NewsContainer";
import SingleStoryPage from "./features/news/SingleStoryPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<NewsContainer />}/>
        <Route path="post/:storyId" element={<SingleStoryPage />} />
      </Route>
    </Routes>
  );
}

export default App;