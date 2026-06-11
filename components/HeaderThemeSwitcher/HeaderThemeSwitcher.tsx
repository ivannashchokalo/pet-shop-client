"use client";

import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";

export default function HeaderThemeSwitcher() {
  return (
    <IconButton className="hidden md:block">
      <Icon name="theme-switcher-header" width={62} height={28} />
    </IconButton>
  );
}
