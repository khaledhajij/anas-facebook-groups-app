import React, { useState } from "react";
import Controls from "./Controls Components/Controls";
import PostsList from "./PostsList";
import CategoriesTable from "../Tables/CategoriesTable";

const Panel = () => {
  const [text, setText] = useState("");
  const [photos, setPhotos] = useState([]);
  const [shownText, setShownText] = useState(text);

  return (
    <div className="panel">
      <Controls
        shownText={shownText}
        setShownText={setShownText}
        text={text}
        setText={setText}
        photos={photos}
        setPhotos={setPhotos}
      />
      <PostsList
        shownText={shownText}
        setShownText={setShownText}
        text={text}
        setText={setText}
        photos={photos}
        setPhotos={setPhotos}
      />
      <CategoriesTable />
    </div>
  );
};

export default Panel;
