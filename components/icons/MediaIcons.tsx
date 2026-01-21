import { IconWrapper, IconProps } from './Icon';

// Play Icon
export function PlayIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </IconWrapper>
  );
}

// Pause Icon
export function PauseIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <rect x="6" y="4" width="4" height="16" />
      <rect x="14" y="4" width="4" height="16" />
    </IconWrapper>
  );
}

// Image Icon
export function ImageIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </IconWrapper>
  );
}

// Video Icon
export function VideoIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </IconWrapper>
  );
}

// Document/File Icon
export function DocumentIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </IconWrapper>
  );
}

// Folder Icon
export function FolderIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
    </IconWrapper>
  );
}
