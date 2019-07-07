import React, { useState, useEffect } from 'react';
import { ReactComponent as Car } from 'assets/categories/car.svg';
import { ReactComponent as Eating } from 'assets/categories/eating.svg';

const CategoryIcon = ({ category }) => {
  const [icon, setIcon] = useState(null);

  const iconList = {
    car: <Car />,
    eating: <Eating />,
  };

  useEffect(() => {
    Object.entries(iconList).forEach(([key, value]) => {
      if (key === category) {
        setIcon(value);
      }
    });
  }, []);

  return icon;
};

export default CategoryIcon;
