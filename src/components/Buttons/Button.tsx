import { FC } from "react";
import { BUTTON_TYPE_CLASS, BUTTON_TYPE_POS_CLASS, ButtonType } from "./types";
import { Spinner } from "react-bootstrap";

const Button: FC<ButtonType> = ({
    children,
    type = BUTTON_TYPE_CLASS.SECONDARY,
    isLoading = false,
    disable = false,
    position = BUTTON_TYPE_POS_CLASS.RIGHT,
    onClick,
    className,
    id
  }) => {

    const style = {
        BASE: {
            backgroundColor: '#ffffff',
            borderRadius: '30px',
            padding: '1rem 2rem',
            fontSize: '0.8rem',
            border: '1px solid #9B9EAC',
            textAlign: 'center' as 'center',
            color: 'rgba(32, 37, 67,0.3)',
            flex: '1',
            width: '100%',
            fontWeight: '500',
            img: {
                width: '11rem'
            }
        },
        PRIMARY:{
            backgroundColor: '#000315',
            border: 'none',
            color: '#FFFFFF'
        },
        SECONDARY:{

        }
    }
 
    return (
      <button id={id}  style={{ ...style.BASE, ...(style[type] || {}) }} disabled={disable} onClick={onClick} className={`${className} d-flex flex justify-content-center align-items-center gap-2`}>
        {position === 'left' && <>{isLoading && <Spinner size={'sm'} />} </>} {children}{' '}
        {position === 'right' && <>{isLoading && <Spinner size={'sm'} />} </>}
      </button>
    );
  };
  
  export default Button;
  