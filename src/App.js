import './App.css';
import BlogPostList from './BlogPostList';
import BlogPostDetails from './BlogPostDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom';
function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<BlogPostList />} />
      <Route path="/detail/:id" element={<BlogPostDetails />} />
      
    </Routes>
   </Router>
  );
}

export default App;
