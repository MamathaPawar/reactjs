import React, { useState } from 'react';
import axios from 'axios';

const MyForm = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [platform, setPlatform] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { title, year, platform };
    axios.post('/api/shows', data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
      <input type="text" placeholder="Platform" value={platform} onChange={(e) => setPlatform(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
