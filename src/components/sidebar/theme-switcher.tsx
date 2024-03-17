import { Icons } from "../../assets/icons";
import { useTheme } from "../../context/theme-provider";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex h-12 items-center justify-center gap-6 rounded-md bg-grey-light dark:bg-grey-darker">
      <Icons.lightTheme />
      <div className="flex items-center justify-center">
        <label className="relative h-[20px] w-[40px]">
          <input
            type="checkbox"
            className="h-0 w-0 opacity-0"
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <span className="duration-400 absolute inset-0 cursor-pointer rounded-full bg-purple transition-all"></span>
          <span className="duration-400 absolute h-[14px] w-[14px] rounded-full bg-white transition-all"></span>
        </label>
      </div>
      <Icons.darkTheme />
    </div>
  );
};
