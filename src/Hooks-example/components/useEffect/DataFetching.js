import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetching() {

  const [posts, setPosts] = useState([]);

  /** Promise way  
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },[]);
  */

  //using async await
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {
          posts.map(post => (
            <li key={post.id}> {post.title} </li>
          ))
        }
      </ul>
    </div>
  )
}

export default DataFetching
