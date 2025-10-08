type HeroImageProps = {
  size?: number | string;
};

const HeroImage = ({ size = 350 }: HeroImageProps) => {
  return (
    <div
      style={{ width: size }}
      className="aspect-square rounded-full overflow-hidden border-2 border-[rgba(var(--branding))]"
    >
      <img
        src="/denis_pfp.jpg"
        alt="Foto de perfil"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroImage;
