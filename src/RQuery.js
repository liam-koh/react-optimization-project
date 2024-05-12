// PostList.js

import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const RQuery = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const slicedData = data.slice(0, 10);

  return (
    <div>
      <ul>
        {slicedData.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RQuery;
