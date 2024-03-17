import { useState } from "react";
import { Icons } from "../../assets/icons";
import { ThemeSwitcher } from "./theme-switcher";
import { BoardList } from "./board-list";

export const Sidebar = () => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div
        className={`${visible && "lg:flex "} hidden h-screen w-[300px] flex-col border-r border-border bg-white p-6 dark:bg-grey-dark`}
      >
        <div className="flex flex-col justify-between gap-6">
          <BoardList />
          <ThemeSwitcher />
          <div
            onClick={() => setVisible(!visible)}
            className="ml-2 flex cursor-pointer items-center gap-4"
          >
            <Icons.hideSidebar />
            <p className="text-heading-m">Hide Sidebar</p>
          </div>
        </div>
      </div>
      {!visible && (
        <div
          onClick={() => setVisible(!visible)}
          className="bottom hidden h-12 items-center rounded-r-full bg-purple p-5 lg:flex"
        >
          <Icons.showSidebar />
        </div>
      )}
    </>
  );
};
