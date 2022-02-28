import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog';
import BlogDetail from './Pages/BlogDetail';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="app">
      <div className='brand'>Website Ilham</div>
      <nav className='navigation'>
        <Link to={'/'} className='navigation-item'>Home</Link>
        <Link to={'/blog'} className='navigation-item'>Blog</Link>
        <Link to={'/contact'} className='navigation-item'>Contact</Link>
        <Link to={'/profile'} className='navigation-item'>Profile</Link>
      </nav>
      <Routes>
        <Route path={'/'} element={<Home />}/> 
        <Route path={'blog'} element={<Blog />}/>
        <Route path={'blog/:id'} element={<BlogDetail />}/>
        <Route path={'contact'} element={<Contact />}/>
        <Route path={'profile'} element={<Profile />}/>        
        <Route path={'*'} element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
