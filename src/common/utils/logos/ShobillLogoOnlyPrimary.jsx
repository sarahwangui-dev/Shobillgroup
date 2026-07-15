import Image from 'next/image';
import PropTypes from 'prop-types';
import PrimaryLogo from '../../../../public/Logo-only.png';

export default function ShobillLogoOnlyPrimary({ height, width }) {
  return (
    <Image
      src={PrimaryLogo}
      alt="Shobill Logo"
      height={height || 60}
      width={width || 100}
      priority
    />
  );
}

ShobillLogoOnlyPrimary.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
};
