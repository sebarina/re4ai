'use client';

import {
  HomeIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
  SettingsIcon,
  BellIcon,
  PlusIcon,
  EditIcon,
  TrashIcon,
  DownloadIcon,
  UploadIcon,
  ShareIcon,
  PlayIcon,
  PauseIcon,
  ImageIcon,
  VideoIcon,
  DocumentIcon,
  FolderIcon,
  MailIcon,
  ChatIcon,
  PhoneIcon,
  CalendarIcon,
  ClockIcon,
  LocationIcon,
} from '@/components/icons';

export default function IconsDemo() {
  const icons = [
    // Row 1 - Navigation & Utility
    { name: 'Home', Icon: HomeIcon, variant: 'white' as const },
    { name: 'Menu', Icon: MenuIcon, variant: 'white' as const },
    { name: 'Search', Icon: SearchIcon, variant: 'white' as const },
    { name: 'User', Icon: UserIcon, variant: 'gradient-purple' as const },
    { name: 'Settings', Icon: SettingsIcon, variant: 'gradient-blue' as const },
    { name: 'Bell', Icon: BellIcon, variant: 'gradient-blue' as const },
    // Row 2 - Actions
    { name: 'Plus', Icon: PlusIcon, variant: 'white' as const },
    { name: 'Edit', Icon: EditIcon, variant: 'white' as const },
    { name: 'Trash', Icon: TrashIcon, variant: 'white' as const },
    { name: 'Download', Icon: DownloadIcon, variant: 'gradient-purple' as const },
    { name: 'Upload', Icon: UploadIcon, variant: 'gradient-blue' as const },
    { name: 'Share', Icon: ShareIcon, variant: 'gradient-blue' as const },
    // Row 3 - Media & Files
    { name: 'Play', Icon: PlayIcon, variant: 'white' as const },
    { name: 'Pause', Icon: PauseIcon, variant: 'white' as const },
    { name: 'Image', Icon: ImageIcon, variant: 'white' as const },
    { name: 'Video', Icon: VideoIcon, variant: 'gradient-purple' as const },
    { name: 'Document', Icon: DocumentIcon, variant: 'gradient-blue' as const },
    { name: 'Folder', Icon: FolderIcon, variant: 'gradient-blue' as const },
    // Row 4 - Communication & Location
    { name: 'Mail', Icon: MailIcon, variant: 'white' as const },
    { name: 'Chat', Icon: ChatIcon, variant: 'white' as const },
    { name: 'Phone', Icon: PhoneIcon, variant: 'white' as const },
    { name: 'Calendar', Icon: CalendarIcon, variant: 'gradient-purple' as const },
    { name: 'Clock', Icon: ClockIcon, variant: 'gradient-blue' as const },
    { name: 'Location', Icon: LocationIcon, variant: 'gradient-blue' as const },
  ];

  return (
    <div className="min-h-screen bg-deep-navy p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-bright-white mb-8">常用图标展示</h1>
        <div className="grid grid-cols-6 gap-6">
          {icons.map(({ name, Icon, variant }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center p-6 bg-deep-navy/50 rounded-lg hover:bg-deep-navy/70 transition-colors duration-200"
            >
              <Icon variant={variant} size={32} />
              <span className="mt-3 text-sm text-bright-white/70 text-center">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* 不同尺寸展示 */}
        <section className="mt-16 space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">不同尺寸</h2>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <HomeIcon variant="white" size={16} />
              <span className="text-sm text-bright-white/70">16px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <HomeIcon variant="white" size={24} />
              <span className="text-sm text-bright-white/70">24px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <HomeIcon variant="white" size={32} />
              <span className="text-sm text-bright-white/70">32px</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <HomeIcon variant="white" size={48} />
              <span className="text-sm text-bright-white/70">48px</span>
            </div>
          </div>
        </section>

        {/* 不同颜色变体展示 */}
        <section className="mt-16 space-y-4">
          <h2 className="text-2xl font-semibold text-bright-white">颜色变体</h2>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <HomeIcon variant="white" size={32} />
              <span className="text-sm text-bright-white/70">White</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <HomeIcon variant="gradient-purple" size={32} />
              <span className="text-sm text-bright-white/70">Purple Gradient</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <HomeIcon variant="gradient-blue" size={32} />
              <span className="text-sm text-bright-white/70">Blue Gradient</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
