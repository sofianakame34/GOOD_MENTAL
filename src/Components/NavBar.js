import React, { useEffect, useState } from 'react';
import { Builder } from '@builder.io/react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Logo from "../LogoWORKSHOP.png"; // Assurez-vous que le chemin est correct

import HomePageAcceuille from './Acceuil/HomePageAcceuille';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    fetch('./questionnaires-section.html') // Assurez-vous que le chemin est correct
      .then(response => response.text())
      .then(html => {
        setHtmlContent(html);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'rgba(255, 255, 255, 1)', padding: '26px 16px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: '50px', height: '50px' }} // Ajustez la taille du logo si nécessaire
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
            <Button component={Link} to="/MainLayout" sx={{ background: 'none', color: 'black', fontWeight: 400 }}>
                Acceuil
            </Button>
              <Button component={Link} to="/userquatre" sx={{ background: 'none', color: 'black', fontWeight: 400 }}>
              Nos questionnaires
            </Button>
            <Button component={Link} to="/ChatList" sx={{ background: 'none', color: 'black' }}>
              Chat
            </Button>
            <Button component={Link} to="/Dashboard" sx={{ background: 'none', color: 'black' }}>
              Dashboard
            </Button>
            <Button component={Link} to="/NotificationsPage" sx={{ background: 'none', color: 'black' }}>
              Notification
            </Button>
            <Button component={Link} to="/AboutPage" sx={{ background: 'none', color: 'black' }}>
              FAQ
            </Button>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Button sx={{ background: 'none', color: 'black' }}>A propos</Button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/caf48153123a6710b35ec0560cb353b9b2068dd7b245a82f79a723b5090d95c0?placeholderIfAbsent=true"
              alt="Icon"
              style={{ marginTop: '5px', width: '10px' }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Builder.registerComponent(NavBar, {
  name: 'NavBar',
  inputs: [
    {
      name: 'links',
      type: 'list',
      subFields: [
        {
          name: 'label',
          type: 'string',
        },
        {
          name: 'url',
          type: 'string',
        },
      ],
      defaultValue: [
        { label: 'Home', url: '/MainLayout' },
        { label: 'Nos questionnaires', url: '/' },
        { label: 'Chat', url: '/chat' },
        { label: 'Dashboard', url: '/dashboard' },
        { label: 'Notification', url: '/notification' },
        { label: 'FAQ', url: '/faq' },
        { label: 'A propos', url: '/about' },
      ],
    },
  ],
});

export default NavBar;
