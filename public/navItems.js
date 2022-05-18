import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
} from 'react-icons/ai'

import { RiCoinsLine, RiNotification3Line } from 'react-icons/ri'
import { MdWeb } from 'react-icons/md'
import { BsPersonPlus } from 'react-icons/bs'

export const navItems = [
  {
    title: 'Assets',
    path: '/',
    icon: <AiOutlinePieChart
    />,
  },
  {
    title: 'Pay',
    path: "/components/pay",
    icon: <RiCoinsLine />,
  },
  {
    title: 'Invite Friends',
    path: "/components/share",
    icon: <BsPersonPlus />,
  }
]
