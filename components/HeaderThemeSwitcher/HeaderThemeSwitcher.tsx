"use client";

import Icon from "../Icon/Icon";

export default function HeaderThemeSwitcher() {
  return (
    <button className="hidden md:block">
      <Icon name="theme-switcher-header" width={62} height={28} />
    </button>
  );
}
