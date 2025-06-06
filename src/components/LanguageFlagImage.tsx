import Image from "next/image";

type Props = {
  flagUrl?: string;
  name?: string;
};

export const LanguageFlagImage = ({ flagUrl, name }: Props) => {
  return (
    <Image
      src={flagUrl || "https://flagcdn.com/w40/us.png"}
      width={30}
      height={20}
      alt={name || "English"}
    />
  );
};
