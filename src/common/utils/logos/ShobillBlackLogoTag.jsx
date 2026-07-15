import Image from 'next/image';
import PropTypes from 'prop-types';
import BlackLogoWithTag from '../../../../public/Logo-in-Black-01.png';

export default function ShobillBlackLogoTag({ height, width }) {
  return (
    <Image
      src={BlackLogoWithTag}
      alt="Shobill Logo"
      height={height || 60}
      width={width || 100}
      priority
    />
  );
}

ShobillBlackLogoTag.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
};
