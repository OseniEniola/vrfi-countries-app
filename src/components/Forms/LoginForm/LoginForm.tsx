import { Button } from '@/components';
import style from './LoginForm.module.scss';
import GoogleIcon from '../../../assets/images/icons/google-icon.svg';
import MicrosoftIcon from '../../../assets/images/icons/microsoft.svg';
import FloatingLabelInput, {
  InputType,
} from '../FormInputs/FloatingLabelInput/FloatingLabelInput';
import { BUTTON_TYPE_CLASS } from '@/components/Buttons/types';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className={style.form_wrapper}>
      <h3>Welcome Back!</h3>
      <h6>Learn all about the countries of the world</h6>
      <div className="d-flex gap-2 mt-4">
        <Button>
          <img style={{ width: '0.9rem' }} src={GoogleIcon} alt="Google-icon" />{' '}
          <span>Sign up with google</span>
        </Button>
        <Button>
          <img
            style={{ width: '0.9rem' }}
            src={MicrosoftIcon}
            alt="Microsoft-icon"
          />
          <span>Sign up with Microsoft</span>
        </Button>
      </div>

      <hr className="mt-4"></hr>

      <div className="mt-2">
        <FloatingLabelInput
          label="Email Address"
          value=""
          id=""
          type={InputType.TEXT}
        />
      </div>
      <div className="mt-3">
        <FloatingLabelInput
          label="Password"
          value=""
          id=""
          type={InputType.PASSWORD}
        />
      </div>

      <div className='mt-5'>
        <Link to={'/app/home'}><Button type={BUTTON_TYPE_CLASS.PRIMARY}>Log In</Button></Link>
      </div>
    </div>
  );
};

export default LoginForm;
