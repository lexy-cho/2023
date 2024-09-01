import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserStore from '@store/UserStore';

export const useHeader = () => {
  const { user } = UserStore();

  const location = useLocation();
  const navigate = useNavigate();

  const [lognin, setLognin] = useState(false);
  const [isOpen, setisOpen] = useState(false);

  const toggleDrawer = () => {
    setisOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (user) setLognin(false);
    else setLognin(true);
  }, [user]);

  return { location, navigate, lognin, isOpen, setisOpen, toggleDrawer };
};
