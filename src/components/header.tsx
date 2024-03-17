import { useState } from "react";
import { Icons } from "../assets/icons";
import { Button } from "./ui/button";
import useWindowSize from "../hooks/useWIndowSize";
import { useTheme } from "../context/theme-provider";
import { Board } from "../types";
import { useDispatch } from "react-redux";
import { HeaderDropdown } from "./header-dropdown";

type HeaderProps = {
  boards: Board[];
};

export const Header = ({ boards }: HeaderProps) => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const { isDesktop } = useWindowSize();
  const [dropdown, setDropdown] = useState(false);

  const handleCreateTask = () => {
    dispatch({ type: "ADD_TASK" });
  };

  return (
    <>
      <header className="fixed left-0 right-0 z-50 flex h-16 justify-between bg-white p-4 dark:bg-grey-dark md:h-20 lg:h-20 lg:px-6">
        <div className="flex items-center ">
          <div className="hidden md:inline-block lg:inline-block">
            {theme === "dark" ? <Icons.logoDark /> : <Icons.logoLight />}
          </div>
          <div className="md:hidden lg:hidden">
            <Icons.logoMobile />
          </div>

          <div className="flex items-center">
            <div
              className="flex cursor-pointer items-center"
              onClick={() => {
                setDropdown((d) => !d);
              }}
            >
              <h2 className="ml-4 mr-2 text-heading-l text-black dark:text-white lg:text-heading-xl">
                {boards[1].name}
              </h2>
              {dropdown ? <Icons.chevronUp /> : <Icons.chevronDown />}
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="mr-4 lg:mr-6">
            <Button
              className="hidden md:block lg:block"
              onClick={handleCreateTask}
              size={isDesktop ? "large" : "small"}
            >
              + Add New Task
            </Button>
            <Button onClick={handleCreateTask} className="md:hidden lg:hidden">
              <Icons.addTaskMobile />
            </Button>
          </div>
          <div className="cursor-pointer" onClick={() => {}}>
            <Icons.verticalEllipses />
          </div>
        </div>
      </header>
      {dropdown && <HeaderDropdown setDropdown={setDropdown} />}
    </>
  );
};
