import React from 'react';
import { ReactComponent as Car } from 'assets/categories/car.svg';
import { ReactComponent as Eating } from 'assets/categories/eating.svg';
import { ReactComponent as Entertainment } from 'assets/categories/entertainment.svg';
import { ReactComponent as Gadget } from 'assets/categories/gadget.svg';
import { ReactComponent as Gift } from 'assets/categories/gift.svg';
import { ReactComponent as Groceries } from 'assets/categories/groceries.svg';
import { ReactComponent as Rent } from 'assets/categories/rent.svg';
import { ReactComponent as Savings } from 'assets/categories/savings.svg';
import { ReactComponent as Shopping } from 'assets/categories/shopping.svg';
import { ReactComponent as Travel } from 'assets/categories/travel.svg';
import { ReactComponent as Income } from 'assets/oval-blue.svg';
import { ReactComponent as Expense } from 'assets/oval-red.svg';
import { ReactComponent as Empty } from 'assets/categories/empty.svg';

const Categories = {
  car: <Car />,
  eating: <Eating />,
  empty: <Empty />,
  income: <Income />,
  expense: <Expense />,
  entertainment: <Entertainment />,
  gadget: <Gadget />,
  gift: <Gift />,
  groceries: <Groceries />,
  rent: <Rent />,
  saving: <Savings />,
  shopping: <Shopping />,
  travel: <Travel />,
};

export default Categories;
