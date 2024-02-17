interface IconProps {
  size?: number;
}

export const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
    />
  </svg>
);

export const GithubIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_402_2"
      // style="mask-type:alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
    >
      <path d="M24 0H0V24H24V0Z" fill="currentColor" />
    </mask>
    <g mask="url(#mask0_402_2)">
      <path
        d="M19.62 11.667C19.62 16.277 16.81 17.297 14.14 17.587C14.56 17.947 14.95 18.687 14.95 19.807C14.95 21.417 14.94 22.707 14.94 23.097C14.94 23.407 15.15 23.787 15.76 23.667C20.57 22.097 24 17.597 24 12.297C24 5.667 18.63 0.296997 12 0.296997C5.37 0.296997 0 5.667 0 12.297C0 17.597 3.44 22.097 8.21 23.687C8.81 23.797 9.03 23.427 9.03 23.107C9.03 22.817 9.02 22.067 9.01 21.067C5.67 21.787 4.97 19.457 4.97 19.457C4.42 18.067 3.63 17.697 3.63 17.697C2.55 16.957 3.72 16.967 3.72 16.967C4.92 17.057 5.56 18.207 5.56 18.207C6.63 20.047 8.36 19.517 9.05 19.207C9.16 18.427 9.47 17.897 9.81 17.597C7.15 17.297 4.34 16.267 4.34 11.667C4.34 10.357 4.81 9.287 5.58 8.447C5.44 8.147 5.04 6.927 5.68 5.277C5.68 5.277 6.69 4.957 8.98 6.507C9.94 6.237 10.96 6.107 11.98 6.097C13 6.107 14.02 6.237 14.98 6.507C17.26 4.957 18.27 5.277 18.27 5.277C18.91 6.927 18.51 8.147 18.39 8.447C19.15 9.287 19.62 10.357 19.62 11.667Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export const Hamburger = () => (
  <svg
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
      fill="currentColor"
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

export const CloseIcon = () => (
  <svg
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
