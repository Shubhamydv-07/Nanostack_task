import { 
  Search, 
  Bell, 
  MessageSquare, 
  User, 
  Plus, 
  Download, 
  ChevronDown, 
  MoreHorizontal,
  Menu,
  X,
  Calendar,
  Settings,
  LogOut,
  Eye,
  Edit,
  Activity,
  Trash2
} from 'lucide-react';
import adam from './adam.png'
import ham_burger from './ham_burger.png'
import calendar from './calender.png'
import admin from './admin.png';
import cube from './cube.png';
import data from './data.png';
import development from './development.png';
import dollar_2 from './dollar_2.png';
import invoice from './invoice.png';
import kpi from './kpi.png';
import library from './library.png';
import production from './production.png';
import purchas from './purchas.png';
import report from './report.png';
import requisation from './requisation.png';
import right_arrow from './right_arrow.png';
import setting from './setting.png';
import shipment from './shipment.png';
import showroom from './showroom.png';
import supplier from './supplier.png';
import task_square from './task_square.png';
import user from './user.png';
import home from './home.png';
import dummy_user from './dummy_user.jpg';
import export_icon from './export_icon.png';
import up_down from './up_down.png';
import up_arrow from './up_arrow.png';
import down_arrow from './down_arrow.png';

export const assets ={
   adam,export_icon,dummy_user, home,ham_burger,calendar,admin,cube,data,development,dollar_2,invoice,kpi,library,production,purchas,report,requisation,right_arrow,setting,shipment,showroom,supplier,task_square,user,up_down,up_arrow,down_arrow
}
export const sidebarItems = [
    { name: 'Dashboard' ,avatar:home,arrow :false },
    { name: 'Tasks'  ,avatar:task_square ,arrow :false},
    { name: 'Buyer Meeting' ,avatar:calendar,arrow :false},
    { name: 'Quick Costing'  ,avatar:dollar_2 ,arrow:false},
    { name: 'Pre Order Costing' ,avatar:dollar_2 ,arrow:false},
    { name: 'Style Library' ,avatar:library,arrow:false },
    { name: 'Requisitions'  ,avatar:requisation ,arrow :right_arrow},
    { name: 'Buyer Purchase' ,avatar:purchas ,arrow :right_arrow},
    { name: 'Inventory' ,avatar:cube ,arrow :right_arrow},
    { name: 'Sample Development' ,avatar:production ,arrow :right_arrow},
    { name: 'Production' ,avatar:production ,arrow :right_arrow},
    { name: 'Master Admin' ,avatar:admin ,arrow :right_arrow},
    { name: 'Users'  ,avatar:user ,arrow :right_arrow},
    { name: 'Suppliers' ,avatar:supplier ,arrow:false},
    { name: 'Showroom' ,avatar: showroom,arrow :right_arrow},
    { name: 'Shipment' ,avatar:shipment,arrow :right_arrow},
    { name: 'KPI\'s' ,avatar:kpi ,arrow :right_arrow},
    { name: 'E-Invoice / E-Way Bill'  ,avatar:invoice,arrow :false},
    { name: 'Reports' ,avatar:report,arrow :false},
    { name: 'Master Data' ,avatar:data,arrow :right_arrow},
    { name: 'Settings' ,avatar:setting,arrow :right_arrow}
  ];


export const meetings = [  
    {
      id: 1,
      date: '01 May, 2026 at 2pm',
      status: 'Completed',
      type: 'Online',
      buyerName: 'Mango Private Limited',
      brand: 'Mango',
      dept: 'Design',
      title: 'Costing Discussion with Zara',
      meetingDate: '01 May, 2026'
    },
    {
      id: 2,
      date: '02 May, 2026 at 3pm',
      status: 'Upcoming',
      type: 'Offline',
      buyerName: 'Cherry Innovations',
      brand: 'Cherry',
      dept: 'Development',
      title: 'UI/UX Review',
      meetingDate: '02 May, 2026'
    },
    {
      id: 3,
      date: '03 May, 2026 at 10am',
      status: 'Follow-up',
      type: 'Offline',
      buyerName: 'Pineapple Inc.',
      brand: 'Pineapple',
      dept: 'Marketing',
      title: 'Campaign Strategy',
      meetingDate: '03 May, 2026'
    },
    {
      id: 4,
      date: '04 May, 2026 at 1pm',
      status: 'Re-scheduled',
      type: 'Offline',
      buyerName: 'Peach Corp.',
      brand: 'Peach',
      dept: 'Finance',
      title: 'Budget Review',
      meetingDate: '04 May, 2026'
    },
    {
      id: 5,
      date: '05 May, 2026 at 4pm',
      status: 'Overdue',
      type: 'Online',
      buyerName: 'Banana Solutions',
      brand: 'Banana',
      dept: 'Product',
      title: 'Feature Prioritization',
      meetingDate: '05 May, 2026'
    }
  ];


export const notifications = [
    {
      id: 1,
      avatar: dummy_user,
      title: "Task comleted",
      message: "[task_name] marked as completed..",
      time: "10 mins ago"
    },
    {
      id: 2,
      icon: Calendar,
      title: "Meeting Created",
      message: "New meeting [meeting_title] is created for [date_time]",
      time: "5 mins ago"
    },
    {
      id: 3,
      icon: Calendar,
      title: "Action Item Added",
      message: "[action_item_name] is added in meeting [meeting_title]",
      time: "22 May 2025"
    },
    {
      id: 4,
      avatar: dummy_user,
      title: "Task assigned",
      message: "[task_name] has been assigned to [user_name].",
      time: "2 hours ago"
    }
  ];

export const chatMessages = [
    {
      id: 1,
      avatar: dummy_user,
      title: "New Message",
      message: "You have a new message from [user_name]",
      time: "10 mins ago"
    },
    {
      id: 2,
      avatar: dummy_user,
      title: "New Message",
      message: "You have a new messages from [user_name]",
      time: "10 mins ago"
    },
    {
      id: 3,
      avatar: dummy_user,
      title: "New Message",
      message: "You have a new messages from [user_name]",
      time: "10 mins ago"
    },
    {
      id: 4,
      avatar: dummy_user,
      title: "New Message",
      message: "You have a new messages from [user_name]",
      time: "10 mins ago"
    }
];

export  const participantsList = [
    { name: 'Mohd Saleem', role: 'Buyer, Sales', avatar: 'M', color: 'bg-green-500' },
    { name: 'Mohd Saleem', role: 'Adam, Merchandiser', avatar: 'M', color: 'bg-green-500' },
    { name: 'Mohd Saleem', role: 'Adam, Admin', avatar: 'M', color: 'bg-green-500' },
    { name: 'Mohd Saleem', role: 'Buyer, CEO', avatar: 'M', color: 'bg-green-500' },
    { name: 'Mohd Saleem', role: 'Buyer, Design Head', avatar: 'M', color: 'bg-green-500' }
  ];
