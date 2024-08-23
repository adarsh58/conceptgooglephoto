
import './App.css';
import { useState } from 'react';
import Album from './Album';

function App() {

  const [albums, setAlbums] = useState([]);
  const [uniqueAlbums, setUniqueAlbums] = useState([

  ]);

  const FetchPhotos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await res.json();
    if (data) {
      setAlbums(data);
    }
  }
  const CreateAlbumCollections = () => {
    const arr = albums.map(p => p.albumId);
    const uniqueAlbumsCount = new Set(arr);
    let albumcolArray = [];
    for (let i = 1; i <= uniqueAlbumsCount.size; i++) {

      let albumcol = {
        id: 0,
        albumId: 0,
        urls: []
      }

      albumcol.albumId = i;

      let res = albums.filter((id) => id.albumId === i).map((item) => {
        let Urls = {
          thumbnailUrl: "",
          Url: ""
        };
        albumcol.id = item.id;
        Urls.thumbnailUrl = item.thumbnailUrl;
        Urls.Url = item.url;
        albumcol.urls.push(Urls);
      })
      albumcolArray.push(albumcol)

    }
    setUniqueAlbums(albumcolArray);
  }
  const HandleClick = () => {
    FetchPhotos();
  }
  const HandleClickData = () => {
    CreateAlbumCollections();
  }

  return (
    <div className="app">
      <div className="button">
        <button onClick={HandleClick} className='btn' >Click to Fetch API</button>
        <button onClick={HandleClickData} className='btn' >Click to ShowData</button>
      </div>
      <div className="albums">
        {uniqueAlbums && uniqueAlbums.map((item) => {
          return (
              <Album item={item} />
          )
        })}
      </div>

    </div>
  );
}

export default App;
