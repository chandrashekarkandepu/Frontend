import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [info, setInfo] = useState<any>(null);

  const handleClick = async () => {
    try {
      const response = await axios.get('http://localhost:4000/awesome/applicant');
      setInfo(response.data);
    } catch (error) {
      console.log('Error fetching information:', error);
    }
  };

  return (
    <div>
      <h1>My Professional User Interface</h1>
      <button onClick={handleClick}>Get Basic and Professional Information</button>
      {info && (
        <div>
          
          <h2>Basic Information</h2>
          <p>Firstname: {info.Firstname}</p>
          <p>Lastname:{info.Lastname}</p>
          <p>Age: {info.age}</p>
          <p>Hobby: {info.hobby}</p>
          <br>
          
          </br>
          <h2>Education</h2>
          <p>University Name:{info.Name}</p>
          <p>Degree:{info.Degree}</p>
          <br>
          </br>
          <h2>Experience</h2>
          <p>Last Project Name:{info.Project}</p>
          <p>Company:{info.Company}</p>
        </div>
        
      )}
    </div>
  );
};

export default App;
