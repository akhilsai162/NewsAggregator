import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './BlogPostList.css';

const BlogPostList = () => {
  let [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-06-18&sortBy=publishedAt&apiKey=09c491cfdd29430ab2597d7b1f581df8")
      .then((res) => setData(res.data.articles));
  }, []);

  if (data.length > 0) {
    return (
      <div>
        <Table striped bordered hover>
          <thead><tr><th>Blog Post List</th></tr></thead>
          <tbody>
            {
              data.map((item, index) => {
                return (
                  <tr key={index} onClick={() => navigate(`/detail/${index}`, { state: { item } })}>
                    <td>{item.source.name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }

  return <div>Loading...</div>;
}

export default BlogPostList;
