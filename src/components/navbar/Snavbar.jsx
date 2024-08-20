import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Snavbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        padding: '10px 20px',
        marginTop: '95px', // Adjust this based on the height of your Navbar
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <LocalPhoneIcon />
        <p style={{ margin: '0 0 0 10px' }}>HELPLINE 03493673578</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="search"
          placeholder="Search"
          style={{
            padding: '5px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>
    </div>
  );
};

export default Snavbar;