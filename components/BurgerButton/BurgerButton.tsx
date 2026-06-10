import Icon from "../Icon/Icon";

export default function BurgerButton() {
  return (
    <>
      <button
        type="button"
        className="flex items-center justify-center p-[10px]"
      >
        <Icon name="burger-menu" className="fill-[#323f50]" />
      </button>
    </>
  );
}
