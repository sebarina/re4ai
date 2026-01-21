import { IconWrapper, IconProps } from './Icon';

// Home Icon
export function HomeIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <path d="M9 22V12h6v10" />
    </IconWrapper>
  );
}

// Menu Icon (Hamburger)
export function MenuIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 12h18M3 6h18M3 18h18" />
    </IconWrapper>
  );
}

// Search Icon
export function SearchIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </IconWrapper>
  );
}

// User/Profile Icon
export function UserIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </IconWrapper>
  );
}

// Settings Icon
export function SettingsIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
    </IconWrapper>
  );
}

// Notification/Bell Icon
export function BellIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </IconWrapper>
  );
}
