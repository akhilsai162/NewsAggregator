import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './BlogPostDetails.css'
const BlogPostDetails = () => {
    const location = useLocation();
    const { item } = location.state;
    const navigate=useNavigate();
  
    return (
      <div>
    <Card className="bg-dark text-white">
      <Card.Img src={item.urlToImage} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
         {item.description}
        </Card.Text>
        <Card.Text>content:{item.content}</Card.Text>
      </Card.ImgOverlay>
    </Card>
    <div className='d-grid gap-2'>
    <Button onClick={() => navigate('/')} size="lg">Back to List</Button>
    </div>

    
    
      </div>
    );
}

export default BlogPostDetails



