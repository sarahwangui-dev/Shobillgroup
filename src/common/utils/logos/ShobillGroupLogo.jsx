import Image from 'next/image';
import PropTypes from 'prop-types';
import ShobillGroup from '../../../../public/Logo-with-text.png';

export default function ShobillGroupLogo({ height, width }) {
  return (
    <Image
      src={ShobillGroup}
      alt="Shobill Logo"
      height={height || 60}
      width={width || 100}
      priority
    />
  );
}

ShobillGroupLogo.PropTypes = {
  height: PropTypes.number,
  width: PropTypes.number
};
