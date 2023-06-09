import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Posts  from './components/posts';
import Profile from './components/profile';


const App = () => {
  return (
    <div>
      <header>
        Header
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Home/>}/>
          <Route path="posts" element={<Posts/>}/>
          <Route path="profile" element={<Profile/>}/>
        </Routes>  
        <footer>
          Footer
        </footer>
      </BrowserRouter>

    </div>
  );
}

export default App;