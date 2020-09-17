import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetching2() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    const fetchSinglePost = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`);
      setPost(response.data);
    }
    fetchSinglePost();
  }, [idFromButtonClick]);

  const onChangeHandler = (e) => {
    setId(e.target.value);
  }

  const onButtonClickHandler = () => {
    setIdFromButtonClick(id);
  }
  return (
    <div>
      <input type="text" value={id} onChange={(e) => onChangeHandler(e)} />
      <button type="button" onClick={onButtonClickHandler}>Fetch Post</button>
      <h3> {post.title} </h3>
    </div>
  )
}

export default DataFetching2
