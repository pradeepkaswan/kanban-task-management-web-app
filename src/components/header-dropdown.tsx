import { ThemeSwitcher } from "./sidebar/theme-switcher";

type HeaderDropdownProps = {
  setDropdown: (value: boolean) => void;
};

export const HeaderDropdown = ({ setDropdown }: HeaderDropdownProps) => {
  return (
    <div className="absolute left-0 right-0 top-16 bg-grey-darker">
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
