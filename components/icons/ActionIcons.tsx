import { IconWrapper, IconProps } from './Icon';

// Add/Plus Icon
export function PlusIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M12 5v14M5 12h14" />
    </IconWrapper>
  );
}

// Edit/Pencil Icon
export function EditIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </IconWrapper>
  );
}

// Delete/Trash Icon
export function TrashIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
      <path d="M10 11v6M14 11v6" />
    </IconWrapper>
  );
}

// Download Icon
export function DownloadIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </IconWrapper>
  );
}

// Upload Icon
export function UploadIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <path d="M17 8l-5-5-5 5" />
      <path d="M12 3v12" />
    </IconWrapper>
  );
}

// Share Icon
export function ShareIcon(props: IconProps) {
  return (
    <IconWrapper {...props}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51l6.82 3.98M15.41 6.51l-6.82 3.98" />
    </IconWrapper>
  );
}
