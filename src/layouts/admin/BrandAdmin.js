import { Link } from 'react-router-dom';
import LalaShopLogo from '../../icons';

export default function Brand() {
  return (
    <Link to="/admin/profile">
      <LalaShopLogo />
    </Link>
  );
}
