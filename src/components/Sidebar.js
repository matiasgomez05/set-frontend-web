// src/components/Sidebar.js
import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { text: 'Inicio', path: '/', icon: <HomeIcon /> },
    { text: 'Productos', path: '/productos', icon: <StoreIcon /> },
    { text: 'Clientes', path: '/clientes', icon: <PeopleIcon /> },
  ];

  return (
    <div>
      {/* Icono de Menú para Pantallas Pequeñas */}
      <IconButton 
        color="inherit" 
        edge="start" 
        onClick={toggleDrawer} 
        sx={{ display: { xs: 'block', sm: 'none' }, ml: 1, mt: 1 }}
      >
        <MenuIcon />
      </IconButton>

      {/* Barra Lateral Permanente en Pantallas Grandes */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
        }}
        open
      >
        <List>
          {menuItems.map((item) => (
            <ListItemButton 
              key={item.text} 
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      {/* Barra Lateral Desplegable en Pantallas Pequeñas */}
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItemButton 
              key={item.text} 
              onClick={() => {
                navigate(item.path);
                toggleDrawer(); // Cierra el menú después de la navegación
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
