import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CRUDapp.css';
import AppForm from './AppForm'

const App = () => {
  const [apps, setApps] = useState([]);
  const [formData, setFormData] = useState({
    appName: '',
    appLogoUrl: '',
    appLink: '',
    appDescription: '',
    appIntroVideo: '', 
  });

  const [editingAppId, setEditingAppId] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchApps();
  }, []);

  const fetchApps = async () => {
    try {
      const response = await axios.get('https://obezee-api.onrender.com/apps');
      setApps(response.data);
    } catch (error) {
      console.error('Error fetching apps:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingAppId) {
        await axios.put(`https://obezee-api.onrender.com/apps/${editingAppId}`, formData);
        const updatedApps = apps.map((app) => {
          if (app._id === editingAppId) {
            return {
              ...app,
              appName: formData.appName,
              appLogoUrl: formData.appLogoUrl,
              appLink: formData.appLink,
              appDescription: formData.appDescription,
              appIntroVideo: formData.appIntroVideo, 
            };
          }
          return app;
        });
        setApps(updatedApps);
        setEditingAppId(null);
        setSuccessMessage('App updated successfully!');
      } else {
        await axios.post('https://obezee-api.onrender.com/apps', formData);
        setSuccessMessage('App added successfully!');
      }
      setFormData({
        appName: '',
        appLogoUrl: '',
        appLink: '',
        appDescription: '',
        appIntroVideo: '', 
      });
  
      // Fetch apps 
      fetchApps();
    } catch (error) {
      console.error('Error saving app:', error);
    }
  };
  

  const handleEdit = (app) => {
    setFormData({
      appName: app.appName,
      appLogoUrl: app.appLogoUrl,
      appLink: app.appLink,
      appDescription: app.appDescription,
      appIntroVideo: app.appIntroVideo,
    });
    setEditingAppId(app._id);
  };

  const handleDelete = async (appId) => {
    try {
      await axios.delete(`https://obezee-api.onrender.com/apps/${appId}`);
      fetchApps();
    } catch (error) {
      console.error('Error deleting app:', error);
    }
  };

  return (

    <>
          <AppForm
        formData={formData}
        handleChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
        handleSubmit={handleSubmit}
        editingAppId={editingAppId}
        successMessage={successMessage}
      />

    <div class="app-grid">
  {apps.map((app) => (
    <div class="app-card" key={app._id}>
      <h3>{app.appName}</h3>
      <img
        src={app.appLogoUrl}
        alt={app.appName}
        style={{ width: '220px', height: '100px' }}
      />
     <span> Description: {app.appDescription}</span>
      <a href={app.appLink} target="_blank" rel="noopener noreferrer">
        Visit App
      </a>
      <a href={app.appIntroVideo} target="_blank" rel="noopener noreferrer">
        Visit App Intro Video
      </a>
      <button onClick={() => handleEdit(app)}>Edit</button>
      <button onClick={() => handleDelete(app._id)}>Delete</button>
    </div>
  ))}
</div>

</>
  );
};  

export default App;
