import React, { useState, useEffect } from 'react';
import { ReactComponent as Car } from 'assets/categories/car.svg';
import { ReactComponent as Eating } from 'assets/categories/eating.svg';
import { ReactComponent as Income } from 'assets/oval-blue.svg';
import { ReactComponent as Expense } from 'assets/oval-red.svg';
import { ReactComponent as Empty } from 'assets/categories/empty.svg';

const CategoryIcon = ({ category }) => {
  const [icon, setIcon] = useState(null);

  const iconList = {
    car: <Car />,
    eating: <Eating />,
    empty: <Empty />,
    income: <Income />,
    expense: <Expense />,
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
