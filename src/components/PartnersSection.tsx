"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { coorganizers, organizers, partners, site, type Organization } from "@/data/site";
import { OrganizationModal } from "./OrganizationModal";
import { OrganizationLogo } from "./OrganizationLogo";
import { SectionAction } from "./SectionAction";

function OrganizationCards({ items, variant = "three", startIndex = 0, onSelect, children }: {
  items: Organization[];
  variant?: "one" | "two" | "three";
  startIndex?: number;
  onSelect: (organization: Organization) => void;
  children?: ReactNode;
}) {
  const columns = variant === "three" ? 3 : variant === "two" ? 2 : 1;
  return (
    <ul className={`organization-grid organization-grid--${variant}`}>
      {items.map((item, index) => {
        const column = index % columns;
        const roundedLeft = startIndex + index === 0 || (columns > 1 && column === 0);
        const roundedRight = column === columns - 1;
        const corner = roundedLeft && roundedRight ? "round" : roundedLeft ? "left" : roundedRight ? "right" : "middle";
        return (
          <li className={`organization-card organization-card--${corner} organization-card--${item.id}`} key={item.id}>
            <button className="organization-card-trigger" type="button" aria-haspopup="dialog"
              aria-label={`詳細介紹：${item.name}`} onClick={() => onSelect(item)}>
              <OrganizationLogo id={item.id} />
              <span className="organization-name">{item.name}</span>
            </button>
          </li>
        );
      })}
      {children}
    </ul>
  );
}

export function PartnersSection() {
  const [selected, setSelected] = useState<Organization | null>(null);
  return (
    <section className="content-section partners-section" id="partners" aria-labelledby="partners-title" data-node-id="77:549">
      <div className="section-inner">
        <div className="section-heading-row section-heading-row--two-lines">
          <h2 className="section-title section-title--two-lines" id="partners-title">
            <span>來自國內多個</span>
            <span>資安組織與單位的支持</span>
          </h2>
          <SectionAction section="partners" placement="header" />
        </div>
        <section className="organization-group" aria-labelledby="organizers-title">
          <h3 className="organization-heading" id="organizers-title"><span>主辦單位</span></h3>
          <OrganizationCards items={organizers} onSelect={setSelected} />
        </section>
        <div className="support-groups">
          <section className="organization-group" aria-labelledby="coorganizers-title">
            <h3 className="organization-heading" id="coorganizers-title"><span>協辦單位</span></h3>
            <OrganizationCards items={coorganizers} variant="two" onSelect={setSelected} />
          </section>
          <section className="organization-group organization-group--partners" aria-labelledby="supporters-title">
            <h3 className="organization-heading" id="supporters-title"><span>合作單位</span></h3>
            <OrganizationCards items={partners.slice(0, 1)} variant="one" onSelect={setSelected} />
          </section>
          <section className="organization-group organization-group--partner-overflow" aria-labelledby="supporters-title">
            <OrganizationCards items={partners.slice(1)} startIndex={1} onSelect={setSelected}>
              <li className="organization-recruitment">
                <Link className="organization-recruitment-link" href={site.links.sponsorship}>
                  <span className="organization-recruitment-title">合作夥伴招募中</span>
                  <span className="organization-recruitment-action">了解贊助與合作方式 <span aria-hidden="true">→</span></span>
                </Link>
              </li>
            </OrganizationCards>
          </section>
        </div>
        <SectionAction section="partners" placement="footer" />
      </div>
      <OrganizationModal organization={selected} logo={selected ? <OrganizationLogo id={selected.id} /> : null}
        onClose={() => setSelected(null)} />
    </section>
  );
}
