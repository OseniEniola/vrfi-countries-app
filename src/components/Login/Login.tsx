import { LoginForm } from '../Forms';
import style from './Login.module.scss';
const LoginPage = () => {
   

  return (
    <div className={style.page_wrapper}>
      <div className={style.row_r}>
        <LoginForm />
      </div>

      <div className={style.row_l}>
        <h2>The simplest way to track and manage  your geographical data</h2>
        <h6>Enter your credentials and access your account</h6>

        <div className={style.banner_hld}>
            <div className={style.img1}></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
