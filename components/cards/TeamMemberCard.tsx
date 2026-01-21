import Image from 'next/image';

interface TeamMemberCardProps {
  /**
   * 成员姓名
   */
  name: string;
  /**
   * 职位
   */
  position: string;
  /**
   * 个人履历与成就描述
   */
  bio: string;
  /**
   * 肖像照片路径
   */
  photo: string;
  /**
   * 背景图片路径
   */
  backgroundImage?: string;
  /**
   * 自定义 className
   */
  className?: string;
}

export default function TeamMemberCard({
  name,
  position,
  bio,
  photo,
  backgroundImage,
  className = '',
}: TeamMemberCardProps) {
  return (
    <div
      className={`relative rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-200 border border-deep-navy/10 overflow-hidden ${className}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : { backgroundColor: '#F2FDFF' }
      }
    >
      <div className="relative">
        {/* 肖像照片 */}
        <div className="mb-6 flex justify-center">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-deep-navy/10">
            <Image
              src={photo}
              alt={name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 姓名 */}
        <h3 className="text-2xl font-bold text-deep-navy mb-2 text-center">
          {name}
        </h3>

        {/* 职位 */}
        <p className="text-lg text-deep-navy/70 mb-6 text-center">
          {position}
        </p>

        {/* 个人履历与成就 */}
        <p className="text-sm text-deep-navy/70 leading-relaxed text-center">
          {bio}
        </p>
      </div>
    </div>
  );
}
