import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/contexts/ThemeProviderContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [selected, setSelected] = useState("Home");

  return (
    <div className="flex justify-between p-4">
      <div className="font-bold text-2xl flex items-center justify-center">
        <span>File</span>
        <span className="text-red-600">Manager</span>
      </div>
      <div className="md:flex items-center justify-between gap-16 hidden">
        <Link
          to="/"
          className="p-2 cursor-pointer"
          onClick={() => setSelected("Home")}
        >
          <div className="flex items-center font-bold gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    src="/home.png"
                    alt="home"
                    className="w-8 object-contain"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Home</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/*<p className="mt-2">Home</p>*/}
          </div>
          {selected === "Home" && (
            <div className="flex justify-center rounded-md h-1 bg-blue-600 w-full"></div>
          )}
        </Link>
        <Link
          to="/transactions"
          className="p-2 cursor-pointer"
          onClick={() => setSelected("Transactions")}
        >
          <div className="flex items-center font-bold gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    src="/tranxn.png"
                    alt="transactions"
                    className="w-8 object-contain"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Transactions</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/*<p className="mt-2">Transactions</p>*/}
          </div>
          {selected === "Transactions" && (
            <div className="flex justify-center rounded-md h-1 bg-blue-600 w-full"></div>
          )}
        </Link>
        <Link
          to="/budget"
          className="p-2 cursor-pointer"
          onClick={() => setSelected("Budget")}
        >
          <div className="flex items-center font-bold gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    src="/budget.png"
                    alt="budget"
                    className="w-8 object-contain"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Accounts</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/*<p className="mt-2">Accounts</p>*/}
          </div>
          {selected === "Budget" && (
            <div className="flex justify-center rounded-md h-1 bg-blue-600 w-full"></div>
          )}
        </Link>
        <Link
          to="/goals"
          className="p-2 cursor-pointer"
          onClick={() => setSelected("Goals")}
        >
          <div className="flex items-center font-bold gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img
                    src="/goal.png"
                    alt="goals"
                    className="w-8 object-contain"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Categories</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/*<p className="mt-1">Goals</p>*/}
          </div>
          {selected === "Goals" && (
            <div className="flex justify-center rounded-md h-1 bg-blue-600 w-full"></div>
          )}
        </Link>
        <Link
          to="/reports"
          className="p-2 cursor-pointer"
          onClick={() => setSelected("Reports")}
        >
          <div className="flex items-center font-bold gap-1">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <img
                    src="/report.png"
                    alt="reports"
                    className="w-8 object-contain"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reports</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {/*<p className="mt-1">Reports</p>*/}
          </div>
          {selected === "Reports" && (
            <div className="flex justify-center rounded-md h-1 bg-blue-600 w-full"></div>
          )}
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocKn8YEMHWL1_8T65KgdCrJ7GmichWva1cT4t9M766FSUEDflw=s96-c" />
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="md:hidden flex justify-center items-center">
        <Sheet>
          <SheetTrigger>
            <div className="md:hidden">
              <Menu strokeWidth={"3px"} />
            </div>
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between">
            <div className="p-2">
              <Link
                to="/"
                className="cursor-pointer"
                onClick={() => setSelected("Home")}
              >
                <div
                  className={`flex p-2 justify-center items-center font-bold gap-1 rounded-md ${
                    selected === "Home" ? "dark:bg-slate-600 bg-gray-200" : ""
                  }`}
                >
                  <img
                    src="/home.png"
                    alt="home"
                    className="w-10 object-contain"
                  />
                  <p className="mt-2">Home</p>
                </div>
              </Link>
              <Link
                to="/transactions"
                className="p-2 cursor-pointer"
                onClick={() => setSelected("Transactions")}
              >
                <div
                  className={`flex p-2 justify-center items-center font-bold gap-1 rounded-md ${
                    selected === "Transactions"
                      ? "dark:bg-slate-600 bg-gray-200"
                      : ""
                  }`}
                >
                  <img
                    src="/tranxn.png"
                    alt="transactions"
                    className="w-10 object-contain"
                  />
                  <p className="mt-2">Transactions</p>
                </div>
              </Link>
              <Link
                to="/budget"
                className="p-2 cursor-pointer"
                onClick={() => setSelected("Budget")}
              >
                <div
                  className={`flex p-2 justify-center items-center font-bold gap-1 rounded-md ${
                    selected === "Budget" ? "dark:bg-slate-600 bg-gray-200" : ""
                  }`}
                >
                  <img
                    src="/budget.png"
                    alt="budget"
                    className="w-10 object-contain"
                  />
                  <p className="mt-2">Accounts</p>
                </div>
              </Link>
              <Link
                to="/goals"
                className="p-2 cursor-pointer"
                onClick={() => setSelected("Goals")}
              >
                <div
                  className={`flex p-2 justify-center items-center font-bold gap-1 rounded-md ${
                    selected === "Goals" ? "dark:bg-slate-600 bg-gray-200" : ""
                  }`}
                >
                  <img
                    src="/goal.png"
                    alt="goals"
                    className="w-10 object-contain"
                  />
                  <p className="mt-1">Goals</p>
                </div>
              </Link>
              <Link
                to="/reports"
                className="p-2 cursor-pointer"
                onClick={() => setSelected("Reports")}
              >
                <div
                  className={`flex p-2 justify-center items-center font-bold gap-1 rounded-md ${
                    selected === "Reports"
                      ? "dark:bg-slate-600 bg-gray-200"
                      : ""
                  }`}
                >
                  <img
                    src="/report.png"
                    alt="reports"
                    className="w-10 object-contain"
                  />
                  <p className="mt-1">Reports</p>
                </div>
              </Link>
              <div
                onClick={() =>
                  theme == "light" ? setTheme("dark") : setTheme("light")
                }
                className="flex justify-center items-center"
              >
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocKn8YEMHWL1_8T65KgdCrJ7GmichWva1cT4t9M766FSUEDflw=s96-c" />
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="font-bold">Durga Prasad</div>
                <div className="text-blue-500 font-semibold">View Profile</div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
