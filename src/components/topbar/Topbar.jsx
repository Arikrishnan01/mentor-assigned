import React from 'react';
import './topbar.css';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarleft">
        <span className="topbarLeftTitle">student mentor</span>
      </div>
      <div className="topbarRight">
        <div className="topbarRightIcon">
            <LanguageIcon className="topbarIcons"/>
            <NotificationsNoneIcon className="topbarIcons notifi"/>
            <SettingsIcon className="topbarIcons setting"/>
            <img 
            src="https://sb.kaleidousercontent.com/67418/1920x1282/7978bca0ba/christina-wocintechchat-com-50tkcap8m3a-unsplash.jpg" 
            alt="profiles" 
            className="topbarProfile"
        />
        </div>

      </div>
    </div>
  )
}
