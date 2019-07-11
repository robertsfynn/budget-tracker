import { useState, useEffect } from 'react';
import { Categories } from 'components';

const CategoryIcon = ({ category }) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    Object.entries(Categories).forEach(([key, value]) => {
      if (key === category) {
        setIcon(value);
      }
    });
  }, [category]);

  return icon;
};

export default CategoryIcon;
