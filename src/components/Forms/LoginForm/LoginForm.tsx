import { Button } from '@/components';
import style from './LoginForm.module.scss';
import GoogleIcon from '../../../assets/images/icons/google-icon.svg';
import MicrosoftIcon from '../../../assets/images/icons/microsoft.svg';
import FloatingLabelInput, {
  InputType,
} from '../FormInputs/FloatingLabelInput/FloatingLabelInput';
import { BUTTON_TYPE_CLASS } from '@/components/Buttons/types';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const LoginForm = () => {
  const navigate = useNavigate();


  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: () => {
      navigate('/app/home');
    },
  });


  return (
    <div className={style.form_wrapper}>
      <h3>Welcome Back!</h3>
      <h6>Learn all about the countries of the world</h6>
      <div className={`${style.sso_wrap} d-flex gap-2 mt-4`}>
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
          id=""
          value={loginForm.values.email}
          onChange={loginForm.handleChange}
          onBlur={loginForm.handleBlur}
          type={InputType.TEXT}
          name="email"
          error={loginForm.touched?.email && loginForm.errors?.email}
          errorMessage={loginForm.errors?.email}
        />
      </div>
      <div className="mt-3">
        <FloatingLabelInput
          label="Password"
          id=""
          type={InputType.PASSWORD}
          value={loginForm.values.password}
          name="password"
          onChange={loginForm.handleChange}
          onBlur={loginForm.handleBlur}
          error={loginForm.touched?.password && loginForm.errors?.password}
          errorMessage={loginForm.errors?.password}
        />
      </div>

      <div className="mt-5">
        <Button onClick={loginForm.submitForm} type={BUTTON_TYPE_CLASS.PRIMARY}>
          Log In
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
