interface IconProps {
  size?: number;
}

export const Hamburger = (props: IconProps) => (
  <svg
    className={`w-${props.size || 6} h-${props.size || 6}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

export const LinkedinIcon = (props: IconProps) => (
  <svg
    className={`w-${props.size || 6} h-${props.size || 6}`}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 0C1.79 0 0 1.79 0 4V32C0 34.21 1.79 36 4 36H32C34.21 36 36 34.21 36 32V4C36 1.79 34.21 0 32 0H4ZM4 4H32V32H4V4ZM9.55859 6.63281C7.84459 6.63281 6.81641 7.66316 6.81641 9.03516C6.81641 10.4072 7.84472 11.4336 9.38672 11.4336C11.1007 11.4336 12.1289 10.4072 12.1289 9.03516C12.1289 7.66316 11.1006 6.63281 9.55859 6.63281ZM6.95312 14V28H12V14H6.95312ZM16.1641 14V28H21.2109V20.3477C21.2109 18.0697 22.8362 17.7422 23.3242 17.7422C23.8122 17.7422 25.1172 18.2317 25.1172 20.3477V28H30V20.3477C30 15.9537 28.0475 14 25.6055 14C23.1635 14 21.8609 14.8131 21.2109 15.9531V14H16.1641Z"
      fill="currentColor"
    />
  </svg>
);

export const GmailIcon = (props: IconProps) => (
  <svg
    className={`w-${props.size || 6} h-${props.size || 6}`}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 6C5.15762 6 2 9.15762 2 13V36C2 39.2899 4.71006 42 8 42H16V27.3477L24 33.5977L32 27.3477V42H40C43.2899 42 46 39.2899 46 36V13C46 9.15762 42.8424 6 39 6C37.5002 6 35.9651 6.48452 34.6875 7.48438L24 15.8242L13.3125 7.48438H13.3086C12.0316 6.48616 10.4985 6 9 6ZM9 10C9.66025 10 10.2852 10.1966 10.8477 10.6367L12 11.5352V19.1484L6 14.4648V13C6 11.3184 7.31838 10 9 10ZM39 10C40.6816 10 42 11.3184 42 13V14.4648L36 19.1484V11.5352L37.1523 10.6367C37.7147 10.1966 38.3398 10 39 10ZM16 14.6562L24 20.8984L32 14.6562V22.2734L24 28.5234L16 22.2734V14.6562ZM6 19.5391L12 24.2227V38H8C6.86994 38 6 37.1301 6 36V19.5391ZM42 19.5391V36C42 37.1301 41.1301 38 40 38H36V24.2227L42 19.5391Z"
      fill="#FCFCFC"
    />
    <rect
      x="0.5"
      y="0.5"
      width={props.size ? props?.size * 4 - 1 : 23}
      height={props.size ? props?.size * 4 - 1 : 23}
      stroke="black"
    />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg
    className={`w-${props.size || 6} h-${props.size || 6}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
