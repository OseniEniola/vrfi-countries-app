import style from './MainLayout.module.scss';
import Avatar from '../assets/images/avatar/avatar1.svg';
import MapIcon from '../assets/images/icons/Map.svg';
import LogOUtIcon from '../assets/images/icons/logout-icon.svg';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div className={style.page_wrapper}>
      <div className={`${style.bubble_bg} ${style.background_img}`}></div>
      <div className={`${style.light_bg} ${style.background_img}`}></div>

      <div className={style.innercontent}>
        <div className={style.sec_r}>
          <hr />

          <div className={style.profile_info_wrap}>
            <div className={style.avatar_hld} style={{ backgroundImage: `url(${Avatar})` }}></div>
            <div className={style.info}>
              <div className={style.name}>Brian Johnson</div>
              <div className={style.edit}>Edit Profile</div>
            </div>
          </div>

          <hr />

          <div className={style.profile_info_wrap}>
            <div className={style.map_icon}>
                <img src={MapIcon} alt='map_icon'/>
            </div>
            <div className={style.info}>
              <div className={`${style.name} ${style.xl}`}>Countries</div>
            </div>
          </div>

          <Link to={'/login'} className={style.logout}>
            <img src={LogOUtIcon} alt="Log out" />
            <span>Logout</span>
          </Link>
        </div>
        <div className={style.sec_l}>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
