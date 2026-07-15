import { useTheme } from '@mui/material/styles';

const Logo = () => {
  const theme = useTheme();

  return (
    <svg
      width="40px"
      height="50px"
      viewBox="-102.4 -102.4 1228.80 1228.80"
      className="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g
        id="SVGRepo_bgCarrier"
        strokeWidth="0"
        transform="translate(0,0), scale(1)"
      ></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="14.336000000000002"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M618.2 340.5H220.9l181.6-190.8 134.2 144.1c8.7 9.3 23.4 9.9 32.8 1.2 9.4-8.7 9.9-23.4 1.2-32.7l-151-162.2c-4.4-4.7-10.5-7.4-16.9-7.4-6.5 0.5-12.5 2.6-17 7.2L150 347.7c-4.1 4.3-6.4 10-6.4 16v534.8c0 12.8 10.4 23.2 23.2 23.2h451.4c12.8 0 23.2-10.4 23.2-23.2V363.7c0-12.8-10.3-23.2-23.2-23.2zM595 875.3H190V386.8h405v488.5z m262.3-440H699.5c-12.8 0-23.2 10.4-23.2 23.2 0 12.8 10.4 23.2 23.2 23.2H834v393.9H699.5c-12.8 0-23.2 10.4-23.2 23.2 0 12.8 10.4 23.2 23.2 23.2h157.7c12.8 0 23.2-10.4 23.2-23.2V458.4c0.1-12.8-10.3-23.1-23.1-23.1z m-339 21.2h-78.8v78.6h78.8v-78.6z m-172.7 0h-78.8v78.6h78.8v-78.6z m172.7 139.2h-78.8v78.6h78.8v-78.6z m-172.7 0h-78.8v78.6h78.8v-78.6z m172.7 139.1h-78.8v78.6h78.8v-78.6z m-172.7 0h-78.8v78.6h78.8v-78.6z"
          fill="#dfa85e"
        ></path>
      </g>

      <text
        fontSize="290"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
        y="95%"
        fill={theme.palette.secondary.main}
      >
        Shobill
      </text>
    </svg>
  );
};

export default Logo;
