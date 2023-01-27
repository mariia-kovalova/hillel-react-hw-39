import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { Users } from 'pages/Users';
import { UserAlbums } from 'pages/UserAlbums';
import { Routes, Route } from 'react-router-dom';
import { Photos } from './Photos/Photos';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="user/:userId/albums" element={<UserAlbums />}>
          <Route path=":albumId/photos" element={<Photos />} />
        </Route>
      </Route>
    </Routes>
  );
}
