"use client";

import type { ReactNode } from "react";
import {
  trackBookNowClick,
  trackCallClick,
  trackWhatsAppClick,
  type TrackingParams,
} from "../../lib/tracking";

type TrackedAnchorProps = {
  href: string | undefined;
  children: ReactNode;
  className?: string;
  location: string;
  params?: TrackingParams;
  target?: string;
  rel?: string;
};

export function TrackedWhatsAppLink({
  href,
  children,
  className,
  location,
  params,
  target = "_blank",
  rel = "noopener noreferrer",
}: TrackedAnchorProps) {
  if (!href) {
    return (
      <span className={className} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={() => {
        trackWhatsAppClick(location, params);
        trackBookNowClick(location, params);
      }}
      className={className}
    >
      {children}
    </a>
  );
}

export function TrackedCallLink({
  href,
  children,
  className,
  location,
  params,
}: TrackedAnchorProps) {
  if (!href) {
    return (
      <span className={className} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      onClick={() => trackCallClick(location, params)}
      className={className}
    >
      {children}
    </a>
  );
}

export function TrackedBookLink({
  href,
  children,
  className,
  location,
  params,
}: TrackedAnchorProps) {
  if (!href) {
    return (
      <span className={className} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      onClick={() => trackBookNowClick(location, params)}
      className={className}
    >
      {children}
    </a>
  );
}
