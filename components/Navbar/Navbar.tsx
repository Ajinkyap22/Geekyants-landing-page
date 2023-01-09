import React from "react";

import LetsTalk from "components/LetsTalk/LetsTalk";

import Image from "next/image";

type Props = {
  showNavbar: boolean;
};

const Navbar = ({ showNavbar }: Props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed top-0 z-20 w-full bg-white shadow-navbar transition-transform ${
        showNavbar ? "trasnalte-y-0" : "-translate-y-full"
      }`}
    >
      <div className="xl:container py-2.5 px-4 lg:py-0 lg:px-0 flex lg:flex-row xl:mx-auto items-center justify-between xl:px-20 2xl:px-40">
        {/* logo */}
        <button onClick={scrollToTop} className="cursor-pointer">
          <Image
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAzNDE1IDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9ImxvZ28tc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNDE1IDUxMiI+PHN0eWxlPi5sb2dvLXN2ZyAuc3Qye2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I2ZmZn08L3N0eWxlPjxnIGlkPSJHZWVreUFudHNGdWxsTG9nb0xpZ2h0VGhlbWUiPjxnIGlkPSJHcm91cC00Ij48ZyBpZD0iT3ZhbCI+PGNpcmNsZSBpZD0icGF0aC0xXzFfIiBjbGFzcz0ic3QwIiBjeD0iMjU2IiBjeT0iMjU2IiByPSIyNTYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjY2EwMDAwIi8+PC9nPjxkZWZzPjxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9Ijk5IiB5PSIxMjciIHdpZHRoPSIzMTUiIGhlaWdodD0iNDkyIj48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjEgMCAwIDAgMCAwIDEgMCAwIDAgMCAwIDEgMCAwIDAgMCAwIDEgMCIvPjwvZmlsdGVyPjwvZGVmcz48bWFzayBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI5OSIgeT0iMTI3IiB3aWR0aD0iMzE1IiBoZWlnaHQ9IjQ5MiIgaWQ9Im1hc2stMl8xXyI+PGcgY2xhc3M9InN0MSIgZmlsdGVyPSJ1cmwoI0Fkb2JlX09wYWNpdHlNYXNrRmlsdGVyKSI+PGNpcmNsZSBpZD0icGF0aC0xXzJfIiBjbGFzcz0ic3QyIiBjeD0iMjU2IiBjeT0iMjU2IiByPSIyNTYiLz48L2c+PC9tYXNrPjxnIGlkPSJHcm91cC0zIiBjbGFzcz0ic3QzIiBtYXNrPSJ1cmwoI21hc2stMl8xXykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk5IDEyNykiPjxlbGxpcHNlIGlkPSJPdmFsXzFfIiBjbGFzcz0ic3QyIiBjeD0iMjYuNSIgY3k9IjI2IiByeD0iMjYuNSIgcnk9IjI2Ii8+PGVsbGlwc2UgaWQ9Ik92YWwtQ29weSIgY2xhc3M9InN0MiIgY3g9IjI4OC41IiBjeT0iMjYiIHJ4PSIyNi41IiByeT0iMjYiLz48Y2lyY2xlIGlkPSJPdmFsLUNvcHktMiIgY2xhc3M9InN0MiIgY3g9IjE2MCIgY3k9IjIxNSIgcj0iOTUiLz48Y2lyY2xlIGlkPSJPdmFsLUNvcHktMyIgY2xhc3M9InN0MiIgY3g9IjE2MCIgY3k9IjM5NyIgcj0iOTUiLz48cGF0aCBpZD0iUGF0aC02LUNvcHkiIGNsYXNzPSJzdDIiIGQ9Ik0yNjkuMyAzNmMtMjkuMSAyMi41LTUwLjggNTAuNS02NC45IDgzLjktMjEuMiA1MC4xLTYuMiA1Ny42IDEzLjcgMTEuMyAxMy4zLTMwLjkgMzUtNTkuNyA2NC45LTg2LjRMMjY5LjMgMzZ6Ii8+PHBhdGggaWQ9IlBhdGgtNi1Db3B5LTIiIGNsYXNzPSJzdDIiIGQ9Ik00Ny43IDM2YzI5LjEgMjIuNSA1MC44IDUwLjUgNjQuOSA4My45IDIxLjIgNTAuMSA2LjIgNTcuNi0xMy43IDExLjNDODUuNiAxMDAuMyA2NCA3MS41IDM0IDQ0LjhMNDcuNyAzNnoiLz48cGF0aCBpZD0iUGF0aC03IiBjbGFzcz0ic3QyIiBkPSJNMTI2IDMwMXYxMmg2OHYtMTJoLTY4eiIvPjwvZz48L2c+PC9nPjxwYXRoIGlkPSJHZWt5QW50cyIgZD0iTTc5Ni44IDQ2Ny43YzM1LjEgMCA2Ny40LTUuMiA5Ni45LTE1LjZzNTEuOC0yNC4xIDY3LjEtNDEuMVYyNDEuN0g3OTIuMlYzMTBoNjkuMXY2NGMtMTIuNiAxMS41LTMxLjkgMTcuMy01Ny44IDE3LjMtMzAuMiAwLTUyLjMtMTAuMy02Ni40LTMxUzcxNiAzMDguNiA3MTYgMjY3LjR2LTI0LjljLjItMzkuMyA3LjEtNjkuNSAyMC43LTkwLjZzMzIuOS0zMS43IDU3LjgtMzEuN2MyMC44IDAgMzYuOCA0LjkgNDguMSAxNC43czE4LjcgMjYuMiAyMi4xIDQ5LjNoOTUuN2MtNC43LTQ2LjYtMjEuMy04MS43LTQ5LjctMTA1LjJTODQyLjQgNDMuNyA3OTEgNDMuN2MtMzUuMSAwLTY2IDguMi05Mi43IDI0LjVzLTQ3LjIgMzkuNi02MS42IDcwLTIxLjUgNjUuOC0yMS41IDEwNi4zbC4zIDM1LjdjMi4zIDU4LjkgMTkuNSAxMDQuOSA1MS44IDEzNy45czc1LjUgNDkuNiAxMjkuNSA0OS42em0zNjUuNiAwYzI1LjEgMCA0OC42LTQuOSA3MC40LTE0LjZzMzguNy0yMi44IDUwLjYtMzkuMmwtNDMuNi01MS41Yy0xNyAyMS4xLTQwLjYgMzEuNy03MC44IDMxLjctMTguMyAwLTMzLjItNC45LTQ0LjctMTQuN3MtMTktMjMuMy0yMi40LTQwLjVoMTg5Ljd2LTM3LjFjMC00Ny44LTEyLjUtODUtMzcuNC0xMTEuN3MtNTguOS00MC4xLTEwMi00MC4xYy0zMC42IDAtNTcgNi42LTc5LjMgMTkuN3MtMzkuMiAzMS43LTUwLjggNTUuNi0xNy40IDUxLjYtMTcuNCA4M3Y3LjljMCA0NC45IDE0LjUgODEuNCA0My42IDEwOS41IDI5IDI3LjkgNjcuMSA0MiAxMTQuMSA0MnptMzUuNy0xODguNmgtOTYuM2M1LjMtMzcgMjEuOS01NS41IDQ5LjgtNTUuNSAxNS4xIDAgMjYuNyA0LjIgMzQuOCAxMi42czEyIDIwLjIgMTEuNiAzNS41djcuNHpNMTcxNC45IDQ2MnYtODcuMmwyNi45LTI2LjkgNjYuOCAxMTQuMUgxOTE4bC0xMTQuNC0xODAuNCAxMDcuMy0xMjZoLTExNC40bC03MS45IDg5LjUtOS42IDEyLjdWMjYuN2gtOTUuNFY0NjJoOTUuM3ptMjcyLjQgMTIzLjhjNDQuOSAwIDc2LjMtMTkuOCA5NC01OS41bDUuNC0xMyAxMjQuOS0zNTcuN2gtMTAyLjJsLTUxIDE3Mi44LTQ4LjQtMTcyLjhoLTEwMmwxMDYuNSAzMDkuMy03LjYgMjAuNGMtMy40IDEwLTguNiAxNi45LTE1LjcgMjAuOHMtMTcuMyA1LjgtMzAuNyA1LjhIMTk0OHY2OC4zYzEzLjggMy43IDI2LjkgNS42IDM5LjMgNS42ek0yMzE1IDQ2MmwyMy44LTc3SDI0NzVsMjQuMSA3N2gxMDYuOEwyNDUzLjUgNDkuN0gyMzYwTDIyMDguOCA0NjJIMjMxNXptMTM2LjItMTUzLjhoLTg4LjZsNDQuMi0xNDMgNDQuNCAxNDN6TTI3MTEuNSA0NjJWMjQ1LjZjOS4xLTE0LjcgMjIuOS0yMi4xIDQxLjYtMjIuMSAxNi40IDAgMjcuOCAzLjYgMzQgMTAuOXM5LjMgMTguNiA5LjMgMzQuMVY0NjJoOTUuN1YyNjQuNmMtLjYtMzguMy04LjctNjctMjQuNS04Ni4xcy0zOS42LTI4LjYtNzEuNS0yOC42Yy0zNy4yIDAtNjYuNCAxMy45LTg3LjUgNDEuNmwtMy4xLTM2SDI2MTZWNDYyaDk1LjV6bTM0NS41IDUuN2MxOC43IDAgMzYuNi0yLjcgNTMuOC04LjJ2LTY4LjNjLTYuNCAxLjEtMTQuMyAxLjctMjMuOCAxLjctMTIuMyAwLTIwLjUtMi4zLTI0LjYtNi44cy02LjItMTIuNi02LjItMjQuMVYyMjEuOGg1MC40di02Ni4zaC01MC40Vjc5LjRoLTk1LjR2NzYuMmgtMzkuMXY2Ni4zaDM5LjFWMzc0YzAgMzEuNSA3LjggNTUgMjMuNSA3MC41czM5LjggMjMuMiA3Mi43IDIzLjJ6bTIwNS45IDBjMzkuNSAwIDcxLjYtOC44IDk2LjQtMjYuM3MzNy4yLTQwLjMgMzcuMi02OC4zYzAtNDEtMjMtNjkuNC02OS4xLTg1LjItMTMuOC00LjctMjkuOC04LjgtNDgtMTIuMnMtMzEuNS03LjctMzkuOC0xMy0xMi41LTEyLjItMTIuNS0yMC43YzAtOC4zIDMuNC0xNS4yIDEwLjItMjAuOHMxNS4yLTguNCAyNS4yLTguNGMyNS45IDAgMzguOCAxMi4zIDM4LjggMzYuOGg5NS43YzAtMjkuOC0xMi4zLTUzLjktMzYuOC03Mi4ycy01Ny0yNy41LTk3LjQtMjcuNWMtMzcuNiAwLTY4IDkuMS05MS4yIDI3LjNzLTM0LjggNDEuNC0zNC44IDY5LjVjMCAxNS45IDQuMSAyOS45IDEyLjIgNDIuMnMxOS45IDIyLjcgMzUuNCAzMS4zIDM1LjEgMTUuNSA1OC45IDIwLjggMzkuOSAxMC40IDQ4LjQgMTUuMyAxMi43IDExLjQgMTIuNyAxOS41YzAgOC41LTMuMyAxNS40LTkuOCAyMC43cy0xNi4zIDcuOS0yOS4zIDcuOWMtMTQuMiAwLTI1LjgtMy4zLTM0LjgtOS44cy0xMy44LTE2LjktMTQuMi0zMWgtODkuMmMwIDE3LjkgNS44IDM1IDE3LjMgNTEuM3MyNy42IDI5LjEgNDguMSAzOC41IDQ0LjEgMTQuMyA3MC40IDE0LjN6Ii8+PHBhdGggaWQ9ImUiIGQ9Ik0xNDQ5LjQgNDY3LjdjLTI1LjEgMC00OC42LTQuOS03MC40LTE0LjZzLTM4LjctMjIuOC01MC42LTM5LjJsNDMuNi01MS41YzE3IDIxLjEgNDAuNiAzMS43IDcwLjggMzEuNyAxOC4zIDAgMzMuMi00LjkgNDQuNy0xNC43czE5LTIzLjMgMjIuNC00MC41aC0xODkuN3YtMzcuMWMwLTQ3LjggMTIuNS04NSAzNy40LTExMS43czU4LjktNDAuMSAxMDItNDAuMWMzMC42IDAgNTcgNi42IDc5LjMgMTkuN3MzOS4yIDMxLjcgNTAuOCA1NS42IDE3LjQgNTEuNiAxNy40IDgzdjcuOWMwIDQ0LjktMTQuNSA4MS40LTQzLjYgMTA5LjVzLTY3LjEgNDItMTE0LjEgNDJ6bS0zNS43LTE4OC42aDk2LjNjLTUuMy0zNy0yMS45LTU1LjUtNDkuOC01NS41LTE1LjEgMC0yNi43IDQuMi0zNC44IDEyLjZzLTEyIDIwLjItMTEuNiAzNS41djcuNHoiLz48L2c+PC9zdmc+"
            width="0"
            height="0"
            sizes="100vw"
            className="w-3/5"
            alt="Geekyants logo"
          />
        </button>

        {/* nav links */}
        <div className="hidden lg:block">
          <ul className="lg:flex items-center justify-between">
            {/* products */}
            <li className="px-4 text-nav-link">
              <h6 className="py-6 md:text-xl tracking-wider w-max">Products</h6>
            </li>

            {/* services */}
            <li className="px-4 text-nav-link flex items-center">
              <h6 className="py-6 md:text-xl tracking-wider w-max">Services</h6>

              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="w-3.5 h-3.5 mx-1 font-light align-middle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
              </svg>
            </li>

            {/* our work */}
            <li className="px-4 text-nav-link flex items-center">
              <h6 className="py-6 md:text-xl tracking-wider w-max">Our Work</h6>

              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="w-3.5 h-3.5 mx-1 font-light align-middle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
              </svg>
            </li>

            {/* solutions */}
            <li className="px-4 text-nav-link">
              <h6 className="py-6 md:text-xl tracking-wider w-max">
                Solutions
              </h6>
            </li>

            {/* more */}
            <li className="px-4 text-nav-link flex items-center">
              <h6 className="py-6 md:text-xl tracking-wider w-max">More</h6>

              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                className="w-3.5 h-3.5 mx-1 font-light align-middle"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
              </svg>
            </li>

            {/* let's talk */}
            <li>
              <LetsTalk text="LET'S TALK" />
            </li>
          </ul>
        </div>

        {/* hamburger */}
        <button className="block lg:hidden bg-zinc-100 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
