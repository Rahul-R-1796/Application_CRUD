// AppForm.js
import React from 'react';
import './CRUDapp.css';

const AppForm = ({
  formData,
  handleChange,
  handleSubmit,
  editingAppId,
  successMessage
}) => {
  return (
<div class="container">
    <h1>App CRUD</h1>
    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    
    <form class="Form_Container" onSubmit={handleSubmit}>
        <div class="form-row">
            <div class="input-data">
                <input
                    type="text"
                    name="appName"
                    value={formData.appName}
                    onChange={handleChange}
                    required
                />
                <div class="underline"></div>
                <label for="appName">App Name</label>
            </div>
        </div>

        <div class="form-row">
            <div class="input-data">
                <input
                    type="text"
                    name="appLogoUrl"
                    value={formData.appLogoUrl}
                    onChange={handleChange}
                    required
                />
                <div class="underline"></div>
                <label for="appLogoUrl">App Logo URL</label>
            </div>
        </div>

        <div class="form-row">
            <div class="input-data">
                <input
                    type="text"
                    name="appLink"
                   
                    value={formData.appLink}
                    onChange={handleChange}
                    required
                />
                <div class="underline"></div>
                <label for="appLink">App Link</label>
            </div>
        </div>

        <div class="form-row">
            <div class="input-data">
                <input
                    type="text"
                    name="appIntroVideo"
                    
                    value={formData.appIntroVideo}
                    onChange={handleChange}
                    required
                />
                <div class="underline"></div>
                <label for="appIntroVideo">App Intro Video URL</label>
            </div>
        </div>

        <div class="form-row">
            <div class="input-data">
                <input
                    type="text"
                    name="appDescription"
                   
                    value={formData.appDescription}
                    onChange={handleChange}
                    required
                />
                <div class="underline"></div>
                <label for="appDescription">App Description</label>
            </div>
        </div>



        <div class="form-row submit-btn">
            <div class="input-data">
                <div class="inner">
                <button type="submit" value="submit">{editingAppId ? 'Update App' : 'Add App'}</button>
                </div>
            </div>
        </div>
        
    </form>

    </div>
  );
};

export default AppForm;
