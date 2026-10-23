import Image from "next/image";
import type { ReactNode } from "react";
import type { TeamMember } from "@/data/team";

export function TeamAvatar({ member, sizes = "(max-width: 767px) 140px, 200px", decorated = false, accessory }: {
  member: TeamMember;
  sizes?: string;
  decorated?: boolean;
  accessory?: ReactNode;
}) {
  return (
    <div className={`team-avatar${member.image ? "" : " team-avatar--placeholder"}${accessory ? " team-avatar--interactive-hat" : ""}`}>
      <Image src={member.image ?? "/icons/android-chrome-512x512.png"} width={200} height={200}
        alt={member.image ? `${member.name} 的頭像` : `${member.name} 的預設頭像（THJCC icon）`} sizes={sizes} />
      {accessory ?? (decorated && member.decoration && (
        <Image className={`team-decoration team-decoration--${member.decoration}`}
          src={`/images/team-decoration-${member.decoration === "left" ? "left" : "right"}.svg`} alt="" width={145} height={68} />
      ))}
    </div>
  );
}
