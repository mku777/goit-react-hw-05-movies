import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import s from '../GoBackLink/GoBackLink.module.css';

export function GoBackLink() {
  const location = useLocation();
  return ( <button className={s.goBackBtn}>
    <Link className={s.GoBackLink} to={location.state?.from ?? '/Home'}>
      Go back
    </Link></button>
  );
}