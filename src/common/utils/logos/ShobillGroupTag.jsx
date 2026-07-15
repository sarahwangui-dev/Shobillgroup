import Image from 'next/image';
import PropTypes from 'prop-types';
import ShobillGroupTagLogo from '../../../../public/Logo-with-tagline-01.png';

export default function ShobillGroupTag({ height, width }) {
  return (
    <Image
      src={ShobillGroupTagLogo}
      alt="Shobill Logo"
      height={height || 60}
      width={width || 100}
      priority
    />
  );
}

ShobillGroupTag.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
};
