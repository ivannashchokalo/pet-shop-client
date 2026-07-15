import Icon from "../Icon/Icon";

export default function HeaderThemeSwitcher() {
  return (
    <button type="button" className="hidden md:block" aria-label="Toggle theme">
      <Icon name="theme-switcher-header" width={62} height={28} />
    </button>
  );
}
