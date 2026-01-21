import { IconWrapper, IconProps } from './Icon';

// Mail/Envelope Icon
export function MailIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </IconWrapper>
  );
}

// Chat/Message Icon
export function ChatIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <circle cx="9" cy="10" r="1" />
      <circle cx="15" cy="10" r="1" />
      <circle cx="12" cy="10" r="1" />
    </IconWrapper>
  );
}

// Phone/Call Icon
export function PhoneIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </IconWrapper>
  );
}

// Calendar Icon
export function CalendarIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <rect x="7" y="14" width="2" height="2" />
      <rect x="11" y="14" width="2" height="2" />
      <rect x="15" y="14" width="2" height="2" />
      <rect x="7" y="18" width="2" height="2" />
    </IconWrapper>
  );
}

// Clock Icon
export function ClockIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </IconWrapper>
  );
}

// Location Icon
export function LocationIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </IconWrapper>
  );
}
