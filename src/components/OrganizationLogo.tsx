import Image from "next/image";
import type { Organization } from "@/data/site";
import longtaiLogo from "../../public/images/logo-longtai.png";

export function OrganizationLogo({ id }: { id: Organization["id"] }) {
  if (id === "ncse") {
    return (
      <div className="organization-logo organization-logo--ncse" aria-hidden="true">
        <Image className="ncse-wordmark" src="/images/ncse-wordmark.svg" alt="" width={174} height={56} />
        <Image className="ncse-network" src="/images/ncse-network.svg" alt="" width={142} height={26} />
        <Image className="ncse-symbol" src="/images/ncse-symbol.svg" alt="" width={27} height={28} />
      </div>
    );
  }

  const sizes = {
    scint: [262, 46], scaict: [247, 78], scist: [226, 57], hitcon: [138, 105], ocf: [277, 118],
    longtai: [longtaiLogo.width, longtaiLogo.height],
  } as const;
  const [width, height] = sizes[id];
  return (
    <div className={`organization-logo organization-logo--${id}`}>
      <Image src={id === "longtai" ? longtaiLogo : `/images/logo-${id}.${id === "scist" ? "svg" : "webp"}`}
        alt="" width={width} height={height}
        sizes="(max-width: 479px) 240px, 277px" />
    </div>
  );
}
