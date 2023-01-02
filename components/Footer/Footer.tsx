import React from "react";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black pt-8 md:pt-20">
      <div className="container xl:mx-auto mb-12 px-8 lg:px-20 2xl:px-40">
        {/* grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.25fr_1fr_1fr_1fr]">
          {/* left */}
          <div>
            {/* logo */}
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAzNDE1IDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9ImxvZ28tc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNDE1IDUxMiI+PHN0eWxlPi5sb2dvLXN2ZyAuc3Qye2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I2ZmZn08L3N0eWxlPjxnIGlkPSJHZWVreUFudHNGdWxsTG9nb0xpZ2h0VGhlbWUiPjxnIGlkPSJHcm91cC00Ij48ZyBpZD0iT3ZhbCI+PGNpcmNsZSBpZD0icGF0aC0xXzFfIiBjbGFzcz0ic3QwIiBjeD0iMjU2IiBjeT0iMjU2IiByPSIyNTYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjY2EwMDAwIi8+PC9nPjxkZWZzPjxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9Ijk5IiB5PSIxMjciIHdpZHRoPSIzMTUiIGhlaWdodD0iNDkyIj48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjEgMCAwIDAgMCAwIDEgMCAwIDAgMCAwIDEgMCAwIDAgMCAwIDEgMCIvPjwvZmlsdGVyPjwvZGVmcz48bWFzayBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI5OSIgeT0iMTI3IiB3aWR0aD0iMzE1IiBoZWlnaHQ9IjQ5MiIgaWQ9Im1hc2stMl8xXyI+PGcgY2xhc3M9InN0MSIgZmlsdGVyPSJ1cmwoI0Fkb2JlX09wYWNpdHlNYXNrRmlsdGVyKSI+PGNpcmNsZSBpZD0icGF0aC0xXzJfIiBjbGFzcz0ic3QyIiBjeD0iMjU2IiBjeT0iMjU2IiByPSIyNTYiLz48L2c+PC9tYXNrPjxnIGlkPSJHcm91cC0zIiBjbGFzcz0ic3QzIiBtYXNrPSJ1cmwoI21hc2stMl8xXykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk5IDEyNykiPjxlbGxpcHNlIGlkPSJPdmFsXzFfIiBjbGFzcz0ic3QyIiBjeD0iMjYuNSIgY3k9IjI2IiByeD0iMjYuNSIgcnk9IjI2Ii8+PGVsbGlwc2UgaWQ9Ik92YWwtQ29weSIgY2xhc3M9InN0MiIgY3g9IjI4OC41IiBjeT0iMjYiIHJ4PSIyNi41IiByeT0iMjYiLz48Y2lyY2xlIGlkPSJPdmFsLUNvcHktMiIgY2xhc3M9InN0MiIgY3g9IjE2MCIgY3k9IjIxNSIgcj0iOTUiLz48Y2lyY2xlIGlkPSJPdmFsLUNvcHktMyIgY2xhc3M9InN0MiIgY3g9IjE2MCIgY3k9IjM5NyIgcj0iOTUiLz48cGF0aCBpZD0iUGF0aC02LUNvcHkiIGNsYXNzPSJzdDIiIGQ9Ik0yNjkuMyAzNmMtMjkuMSAyMi41LTUwLjggNTAuNS02NC45IDgzLjktMjEuMiA1MC4xLTYuMiA1Ny42IDEzLjcgMTEuMyAxMy4zLTMwLjkgMzUtNTkuNyA2NC45LTg2LjRMMjY5LjMgMzZ6Ii8+PHBhdGggaWQ9IlBhdGgtNi1Db3B5LTIiIGNsYXNzPSJzdDIiIGQ9Ik00Ny43IDM2YzI5LjEgMjIuNSA1MC44IDUwLjUgNjQuOSA4My45IDIxLjIgNTAuMSA2LjIgNTcuNi0xMy43IDExLjNDODUuNiAxMDAuMyA2NCA3MS41IDM0IDQ0LjhMNDcuNyAzNnoiLz48cGF0aCBpZD0iUGF0aC03IiBjbGFzcz0ic3QyIiBkPSJNMTI2IDMwMXYxMmg2OHYtMTJoLTY4eiIvPjwvZz48L2c+PC9nPjxwYXRoIGZpbGw9IiNmZmYiIGlkPSJHZWt5QW50cyIgZD0iTTc5Ni44IDQ2Ny43YzM1LjEgMCA2Ny40LTUuMiA5Ni45LTE1LjZzNTEuOC0yNC4xIDY3LjEtNDEuMVYyNDEuN0g3OTIuMlYzMTBoNjkuMXY2NGMtMTIuNiAxMS41LTMxLjkgMTcuMy01Ny44IDE3LjMtMzAuMiAwLTUyLjMtMTAuMy02Ni40LTMxUzcxNiAzMDguNiA3MTYgMjY3LjR2LTI0LjljLjItMzkuMyA3LjEtNjkuNSAyMC43LTkwLjZzMzIuOS0zMS43IDU3LjgtMzEuN2MyMC44IDAgMzYuOCA0LjkgNDguMSAxNC43czE4LjcgMjYuMiAyMi4xIDQ5LjNoOTUuN2MtNC43LTQ2LjYtMjEuMy04MS43LTQ5LjctMTA1LjJTODQyLjQgNDMuNyA3OTEgNDMuN2MtMzUuMSAwLTY2IDguMi05Mi43IDI0LjVzLTQ3LjIgMzkuNi02MS42IDcwLTIxLjUgNjUuOC0yMS41IDEwNi4zbC4zIDM1LjdjMi4zIDU4LjkgMTkuNSAxMDQuOSA1MS44IDEzNy45czc1LjUgNDkuNiAxMjkuNSA0OS42em0zNjUuNiAwYzI1LjEgMCA0OC42LTQuOSA3MC40LTE0LjZzMzguNy0yMi44IDUwLjYtMzkuMmwtNDMuNi01MS41Yy0xNyAyMS4xLTQwLjYgMzEuNy03MC44IDMxLjctMTguMyAwLTMzLjItNC45LTQ0LjctMTQuN3MtMTktMjMuMy0yMi40LTQwLjVoMTg5Ljd2LTM3LjFjMC00Ny44LTEyLjUtODUtMzcuNC0xMTEuN3MtNTguOS00MC4xLTEwMi00MC4xYy0zMC42IDAtNTcgNi42LTc5LjMgMTkuN3MtMzkuMiAzMS43LTUwLjggNTUuNi0xNy40IDUxLjYtMTcuNCA4M3Y3LjljMCA0NC45IDE0LjUgODEuNCA0My42IDEwOS41IDI5IDI3LjkgNjcuMSA0MiAxMTQuMSA0MnptMzUuNy0xODguNmgtOTYuM2M1LjMtMzcgMjEuOS01NS41IDQ5LjgtNTUuNSAxNS4xIDAgMjYuNyA0LjIgMzQuOCAxMi42czEyIDIwLjIgMTEuNiAzNS41djcuNHpNMTcxNC45IDQ2MnYtODcuMmwyNi45LTI2LjkgNjYuOCAxMTQuMUgxOTE4bC0xMTQuNC0xODAuNCAxMDcuMy0xMjZoLTExNC40bC03MS45IDg5LjUtOS42IDEyLjdWMjYuN2gtOTUuNFY0NjJoOTUuM3ptMjcyLjQgMTIzLjhjNDQuOSAwIDc2LjMtMTkuOCA5NC01OS41bDUuNC0xMyAxMjQuOS0zNTcuN2gtMTAyLjJsLTUxIDE3Mi44LTQ4LjQtMTcyLjhoLTEwMmwxMDYuNSAzMDkuMy03LjYgMjAuNGMtMy40IDEwLTguNiAxNi45LTE1LjcgMjAuOHMtMTcuMyA1LjgtMzAuNyA1LjhIMTk0OHY2OC4zYzEzLjggMy43IDI2LjkgNS42IDM5LjMgNS42ek0yMzE1IDQ2MmwyMy44LTc3SDI0NzVsMjQuMSA3N2gxMDYuOEwyNDUzLjUgNDkuN0gyMzYwTDIyMDguOCA0NjJIMjMxNXptMTM2LjItMTUzLjhoLTg4LjZsNDQuMi0xNDMgNDQuNCAxNDN6TTI3MTEuNSA0NjJWMjQ1LjZjOS4xLTE0LjcgMjIuOS0yMi4xIDQxLjYtMjIuMSAxNi40IDAgMjcuOCAzLjYgMzQgMTAuOXM5LjMgMTguNiA5LjMgMzQuMVY0NjJoOTUuN1YyNjQuNmMtLjYtMzguMy04LjctNjctMjQuNS04Ni4xcy0zOS42LTI4LjYtNzEuNS0yOC42Yy0zNy4yIDAtNjYuNCAxMy45LTg3LjUgNDEuNmwtMy4xLTM2SDI2MTZWNDYyaDk1LjV6bTM0NS41IDUuN2MxOC43IDAgMzYuNi0yLjcgNTMuOC04LjJ2LTY4LjNjLTYuNCAxLjEtMTQuMyAxLjctMjMuOCAxLjctMTIuMyAwLTIwLjUtMi4zLTI0LjYtNi44cy02LjItMTIuNi02LjItMjQuMVYyMjEuOGg1MC40di02Ni4zaC01MC40Vjc5LjRoLTk1LjR2NzYuMmgtMzkuMXY2Ni4zaDM5LjFWMzc0YzAgMzEuNSA3LjggNTUgMjMuNSA3MC41czM5LjggMjMuMiA3Mi43IDIzLjJ6bTIwNS45IDBjMzkuNSAwIDcxLjYtOC44IDk2LjQtMjYuM3MzNy4yLTQwLjMgMzcuMi02OC4zYzAtNDEtMjMtNjkuNC02OS4xLTg1LjItMTMuOC00LjctMjkuOC04LjgtNDgtMTIuMnMtMzEuNS03LjctMzkuOC0xMy0xMi41LTEyLjItMTIuNS0yMC43YzAtOC4zIDMuNC0xNS4yIDEwLjItMjAuOHMxNS4yLTguNCAyNS4yLTguNGMyNS45IDAgMzguOCAxMi4zIDM4LjggMzYuOGg5NS43YzAtMjkuOC0xMi4zLTUzLjktMzYuOC03Mi4ycy01Ny0yNy41LTk3LjQtMjcuNWMtMzcuNiAwLTY4IDkuMS05MS4yIDI3LjNzLTM0LjggNDEuNC0zNC44IDY5LjVjMCAxNS45IDQuMSAyOS45IDEyLjIgNDIuMnMxOS45IDIyLjcgMzUuNCAzMS4zIDM1LjEgMTUuNSA1OC45IDIwLjggMzkuOSAxMC40IDQ4LjQgMTUuMyAxMi43IDExLjQgMTIuNyAxOS41YzAgOC41LTMuMyAxNS40LTkuOCAyMC43cy0xNi4zIDcuOS0yOS4zIDcuOWMtMTQuMiAwLTI1LjgtMy4zLTM0LjgtOS44cy0xMy44LTE2LjktMTQuMi0zMWgtODkuMmMwIDE3LjkgNS44IDM1IDE3LjMgNTEuM3MyNy42IDI5LjEgNDguMSAzOC41IDQ0LjEgMTQuMyA3MC40IDE0LjN6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgaWQ9ImUiIGQ9Ik0xNDQ5LjQgNDY3LjdjLTI1LjEgMC00OC42LTQuOS03MC40LTE0LjZzLTM4LjctMjIuOC01MC42LTM5LjJsNDMuNi01MS41YzE3IDIxLjEgNDAuNiAzMS43IDcwLjggMzEuNyAxOC4zIDAgMzMuMi00LjkgNDQuNy0xNC43czE5LTIzLjMgMjIuNC00MC41aC0xODkuN3YtMzcuMWMwLTQ3LjggMTIuNS04NSAzNy40LTExMS43czU4LjktNDAuMSAxMDItNDAuMWMzMC42IDAgNTcgNi42IDc5LjMgMTkuN3MzOS4yIDMxLjcgNTAuOCA1NS42IDE3LjQgNTEuNiAxNy40IDgzdjcuOWMwIDQ0LjktMTQuNSA4MS40LTQzLjYgMTA5LjVzLTY3LjEgNDItMTE0LjEgNDJ6bS0zNS43LTE4OC42aDk2LjNjLTUuMy0zNy0yMS45LTU1LjUtNDkuOC01NS41LTE1LjEgMC0yNi43IDQuMi0zNC44IDEyLjZzLTEyIDIwLjItMTEuNiAzNS41djcuNHoiLz48L2c+PC9zdmc+"
              width="0"
              height="0"
              sizes="100vw"
              className="w-1/2"
              alt="Geekyants logo"
            />

            {/* description */}
            <p className="py-6 pr-4 opacity-60 text-white">
              We are creative Geeks, passionate for designing well crafted,
              simple and functional web and mobile apps.
            </p>

            {/* brands */}
            <div className="flex items-center rounded w-fit py-4 px-6 bg-[#222323]">
              {/* iso */}
              <div className="w-16 hover:opacity-90 cursor-pointer">
                <Image
                  src="https://geekyants.com/_next/static/images/iso-7ebc35916d948223d7fe64287f3e1305.svg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-fit object-contain"
                  alt="ISO"
                />
              </div>

              {/* gms */}
              <div className="w-12 mx-3 hover:opacity-90">
                <Image
                  src="https://geekyants.com/_next/static/images/gms-a59b7e2942dba344e5235c1360b77f12.svg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-fit object-contain"
                  alt="ISO"
                />
              </div>

              {/* aiao-bar */}
              <div className="w-12 hover:opacity-90">
                <Image
                  src="https://geekyants.com/_next/static/images/aiao-f8a0bbbcd7b6dfbcbfe41e062a0cef9a.svg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-fit object-contain"
                  alt="ISO"
                />
              </div>
            </div>

            {/* connect */}
            <div className="flex flex-col mt-8">
              <h6 className="mb-5 text-lg font-medium text-white opacity-70 tracking-wider">
                CONNECT
              </h6>

              {/* social media icons */}
              <div className="flex flex-wrap w-full">
                {/* instagram */}
                <div className="mr-[0.625rem] mb-[0.625rem] flex justify-center items-center w-11 h-11 rounded-full bg-[#222323]">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMS44MjIiIGhlaWdodD0iMjEuODIyIiB2aWV3Qm94PSIwIDAgMjEuNTIxIDIxLjUyMSI+PGcgZGF0YS1uYW1lPSJJY29uIGZlYXRoZXItaW5zdGFncmFtIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxnIGRhdGEtbmFtZT0iR3JvdXAgMTEyODAiIHN0cm9rZS13aWR0aD0iLjciPjxwYXRoIGRhdGEtbmFtZT0iUGF0aCAxNDMxIiBkPSJNNS41NTYuMzVoMTAuNDExYTUuMjA2IDUuMjA2IDAgMDE1LjIwNiA1LjIwNnYxMC40MTFhNS4yMDYgNS4yMDYgMCAwMS01LjIwNiA1LjIwNkg1LjU1NkE1LjIwNiA1LjIwNiAwIDAxLjM1IDE1Ljk2N1Y1LjU1NkE1LjIwNiA1LjIwNiAwIDAxNS41NTYuMzV6IiBzdHJva2U9IiNmNmY2ZjYiLz48cGF0aCBkYXRhLW5hbWU9IlBhdGggMTQzMiIgZD0iTTE0LjkyNiAxMC4xMDZhNC4xNjQgNC4xNjQgMCAxMS0zLjUwOS0zLjUwOSA0LjE2NCA0LjE2NCAwIDAxMy41MDkgMy41MDl6IiBzdHJva2U9IiNmZmYiLz48L2c+PHBhdGggZGF0YS1uYW1lPSJQYXRoIDE0MzMiIGQ9Ik0xNi40ODcgNS4wMzVoMCIgc3Ryb2tlPSIjZjdmOWY5IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-6 h-6 object-contain"
                    alt="Instagram"
                  />
                </div>

                {/* facebook */}
                <div className="mr-[0.625rem] mb-[0.625rem] flex justify-center items-center w-11 h-11 rounded-full bg-[#222323]">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS4zMDUiIGhlaWdodD0iMTAuNSIgdmlld0JveD0iMCAwIDExLjMwNSAyMC41ODQiPjxwYXRoIGQ9Ik0xMC4zMDIgMTEuNTQxbC41NTUtMy42MTdINy4zOTFWNS41NzdBMS44MDggMS44MDggMCAwMTkuNDMgMy42MjNoMS41NzhWLjU0NEExOS4yMzkgMTkuMjM5IDAgMDA4LjIwMy4zQzUuMzQ1LjMgMy40NzcgMi4wMzIgMy40NzcgNS4xNjh2Mi43NTZILjN2My42MTdoMy4xNzd2OC43NDNoMy45MTR2LTguNzQzeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9Ii42Ii8+PC9zdmc+"
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-6 h-6 object-contain"
                    alt="Instagram"
                  />
                </div>

                {/* twitter */}
                <div className="mr-[0.625rem] mb-[0.625rem] flex justify-center items-center w-11 h-11 rounded-full bg-[#222323]">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMi43MjEiIGhlaWdodD0iMTguMjc1Ij48cGF0aCBkPSJNMTkuNjUyIDQuNzNjLjAxNC4xOTMuMDE0LjM4Ni4wMTQuNTc5QTEyLjU4IDEyLjU4IDAgMDE2Ljk5OSAxNy45NzVhMTIuNTgxIDEyLjU4MSAwIDAxLTYuODM3LTIgOS4yMSA5LjIxIDAgMDAxLjA3NS4wNTUgOC45MTYgOC45MTYgMCAwMDUuNTI3LTEuOSA0LjQ2IDQuNDYgMCAwMS00LjE2Mi0zLjA4OCA1LjYxNCA1LjYxNCAwIDAwLjg0MS4wNjkgNC43MDkgNC43MDkgMCAwMDEuMTcyLS4xNTJBNC40NTMgNC40NTMgMCAwMTEuMDQ0IDYuNTl2LS4wNTVhNC40ODQgNC40ODQgMCAwMDIuMDEyLjU2NSA0LjQ1OSA0LjQ1OSAwIDAxLTEuMzc4LTUuOTU0IDEyLjY1NSAxMi42NTUgMCAwMDkuMTg0IDQuNjU5IDUuMDI2IDUuMDI2IDAgMDEtLjExLTEuMDIgNC40NTYgNC40NTYgMCAwMTcuNy0zLjA0NkE4Ljc2NSA4Ljc2NSAwIDAwMjEuMjc4LjY2NGE0LjQ0IDQuNDQgMCAwMS0xLjk1NyAyLjQ1MyA4LjkyNSA4LjkyNSAwIDAwMi41NjQtLjY4OSA5LjU3IDkuNTcgMCAwMS0yLjIzMyAyLjN6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjYiLz48L3N2Zz4="
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-6 h-6 object-contain"
                    alt="Instagram"
                  />
                </div>

                {/* linkedin */}
                <div className="mr-[0.625rem] mb-[0.625rem] flex justify-center items-center w-11 h-11 rounded-full bg-[#222323]">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC42ODgiIGhlaWdodD0iMjAuNjg1Ij48cGF0aCBkPSJNNC44MDEgMjAuMzg1SC42MzNWNi45NzVoNC4xNjh6TTIuNzEzIDUuMTQ2YTIuNDIzIDIuNDIzIDAgMTEyLjQxMS0yLjQzNSAyLjQzMiAyLjQzMiAwIDAxLTIuNDExIDIuNDM1em0xNy42NyAxNS4yMzloLTQuMTU2di02LjUyOGMwLTEuNTU2LS4wMzEtMy41NTEtMi4xNjUtMy41NTEtMi4xNjUgMC0yLjUgMS42OS0yLjUgMy40Mzl2Ni42NEg3LjQwMVY2Ljk3NWg0djEuODI5aC4wNThhNC4zNzYgNC4zNzYgMCAwMTMuOTQyLTIuMTY1YzQuMjE0IDAgNC45ODkgMi43NzUgNC45ODkgNi4zOHY3LjM2NnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNiIvPjwvc3ZnPg=="
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-6 h-6 object-contain"
                    alt="Instagram"
                  />
                </div>

                {/* youtube */}
                <div className="mr-[0.625rem] mb-[0.625rem] flex justify-center items-center w-11 h-11 rounded-full bg-[#222323]">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC40MDYiIGhlaWdodD0iMTQuMzExIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6LjZweH08L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcuMTk5IC0yNy4yKSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik0zMS4yMTEgMzQuMzU2bC0yLjk3MSAxLjUyNi0yLjk3IDEuNTI0di02LjFsMi45NzEgMS41MjN6Ii8+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxOS44MDUiIGhlaWdodD0iMTMuNzExIiByeD0iNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuNSAyNy41KSIvPjwvZz48L3N2Zz4="
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-6 h-6 object-contain"
                    alt="Instagram"
                  />
                </div>

                {/* discord */}
                <div className="mr-[0.625rem] mb-[0.625rem] flex justify-center items-center w-11 h-11 rounded-full bg-[#222323]">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMi41OTgiIGhlaWdodD0iMTcuNjc4Ij48cGF0aCBkYXRhLW5hbWU9IlBhdGggMzA1NSIgZD0iTTE4Ljk2OSAxLjcxMmExOCAxOCAwIDAwLTQuNTYtMS40MzMgMTMuMzcgMTMuMzcgMCAwMC0uNTg0IDEuMjEzIDE2Ljc0MyAxNi43NDMgMCAwMC01LjA1NCAwQTEyLjk2MyAxMi45NjMgMCAwMDguMTguMjc5YTE3Ljk0MiAxNy45NDIgMCAwMC00LjU2MyAxLjQzM0ExOS4xMjQgMTkuMTI0IDAgMDAuMzQgMTQuNTE5YTE4LjIzMSAxOC4yMzEgMCAwMDUuNTkzIDIuODY2IDEzLjkwOSAxMy45MDkgMCAwMDEuMi0xLjk3MyAxMS43NzggMTEuNzc4IDAgMDEtMS44ODctLjkxOGMuMTU4LS4xMTcuMzEzLS4yNC40NjItLjM2NmExMi44ODggMTIuODg4IDAgMDAxMS4xODIgMGMuMTUxLjEyNi4zMDYuMjQ5LjQ2Mi4zNjZhMTEuNzQ4IDExLjc0OCAwIDAxLTEuODkuOTIgMTMuODQ3IDEzLjg0NyAwIDAwMS4yIDEuOTczIDE4LjE5NCAxOC4xOTQgMCAwMDUuNi0yLjg2OCAxOS4xMDUgMTkuMTA1IDAgMDAtMy4yOTMtMTIuODA3ek03LjYyNiAxMS45NGEyLjE0NSAyLjE0NSAwIDAxLTEuOTg3LTIuMjYgMi4xMzQgMi4xMzQgMCAwMTEuOTg3LTIuMjYyQTIuMTIgMi4xMiAwIDAxOS42MTMgOS42OGEyLjEzMSAyLjEzMSAwIDAxLTEuOTg3IDIuMjZ6bTcuMzQzIDBhMi4xNDUgMi4xNDUgMCAwMS0xLjk4Ny0yLjI2IDIuMTM0IDIuMTM0IDAgMDExLjk4Ny0yLjI2MiAyLjEyIDIuMTIgMCAwMTEuOTg3IDIuMjYyIDIuMTMzIDIuMTMzIDAgMDEtMS45ODcgMi4yNnoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvc3ZnPg=="
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-6 h-6 object-contain"
                    alt="Instagram"
                  />
                </div>

                {/* medium */}
                <div className="mr-[0.625rem] mb-[0.625rem] flex justify-center items-center w-11 h-11 rounded-full bg-[#222323]">
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxMC4yMDgiPjxwYXRoIGQ9Ik0xMC4xNjMgNS4xMDRhNS4wODIgNS4wODIgMCAxMS01LjA4MS01LjEgNS4wOTQgNS4wOTQgMCAwMTUuMDgxIDUuMW01LjU3OSAwYzAgMi42NjUtMS4xMyA0LjgxMS0yLjUzIDQuODExcy0yLjUyOS0yLjE0Ni0yLjUyOS00LjgxMVMxMS44MTIuMjkzIDEzLjIxMi4yOTNjMS4zNzggMCAyLjUzIDIuMTY5IDIuNTMgNC44MTFtMi4yNTggMGMwIDIuMzcxLS40MDcgNC4zMTQtLjkgNC4zMTRzLS45LTEuOTQzLS45LTQuMzE0LjQwNy00LjMxNC45LTQuMzE0Yy41MTkgMCAuOSAxLjk0My45IDQuMzE0IiBmaWxsPSIjZmZmZmZmY2MiLz48L3N2Zz4="
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-6 h-6 object-contain"
                    alt="Instagram"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* quick links */}
          <div className="mt-8 lg:mt-0">
            {/* title */}
            <h6 className="text-white opacity-70 font-mediumm mb-6 text-lg">
              QUICK LINKS
            </h6>

            {/* list */}
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 lg:gap-0">
              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                About us
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Freshers
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Leaders
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Our Work
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Products
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Developer Environment Security
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Hire Developers
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Join GeekyAnts
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Events & Conferences
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Gallery
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Partner Program
              </li>
            </ul>
          </div>

          {/* hire developers */}
          <div className="mt-8 lg:mt-0">
            {/* title */}
            <h6 className="text-white opacity-70 font-mediumm mb-6 text-lg">
              HIRE DEVELOPERS
            </h6>

            {/* list */}
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 lg:gap-0 w-full">
              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                React Developers
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                React Native Developers
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Angular Developers
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Node Developers
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Laravel Developers
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Flutter Developers
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Vue JS Developers
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Python Developers
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Golang Developers
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                Svelte Developers
              </li>

              <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                UI/UX Designers
              </li>
            </ul>
          </div>

          <div>
            <div className="mt-8 lg:mt-0">
              {/* title */}
              <h6 className="text-white opacity-70 font-mediumm mb-6 text-lg">
                ENGAGEMENT MODEL
              </h6>

              {/* list */}
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 lg:gap-0 w-full">
                <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                  Fixed Scope
                </li>

                <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                  Dedicated Team
                </li>

                <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                  Agile Product
                </li>
              </ul>
            </div>

            <div className="lg:mt-8 mt-12">
              {/* title */}
              <h6 className="text-white opacity-70 font-mediumm mb-6 text-lg">
                COMPANY
              </h6>

              {/* list */}
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 lg:gap-0 w-full">
                <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                  FAQs
                </li>

                <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                  Sitemap
                </li>

                <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                  Annual Return
                </li>

                <li className="py-1 w-full opacity-70 text-sm text-white cursor-pointer hover:opacity-100 transition-opacity duration-250 leading-6 font-normal">
                  Corporate Social Responsibility
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* awards */}
        <div className="grid mt-14 grid-cols-3 md:grid-cols-7 items-center justify-items-center gap-14 py-10 border-y border-[#707070]">
          {/* clutch */}
          <div className="w-3/4">
            <Image
              src="https://geekyants.com/_next/static/images/clutch-4e399910a1f3ec5ec4e3b347013138bf.svg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full"
              alt="Clutch"
            />
          </div>
          {/* top ui/ux */}
          <div className="w-3/4">
            <Image
              src="https://geekyants.com/_next/static/images/topDevelopers-ddc944386b7a7fcb09c078823517332b.svg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full"
              alt="Clutch"
            />
          </div>
          {/* appfutura */}
          <div className="w-3/4">
            <Image
              src="https://geekyants.com/_next/static/images/appfutura-cd5c2ef2448ebd7d8b29b5fcc53e2e16.svg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full"
              alt="Clutch"
            />
          </div>
          {/* business of apps */}
          <div className="w-3/4">
            <Image
              src="https://geekyants.com/_next/static/images/boa-featured-5aad93aa1b634ee11a94c610ccba1ff6.svg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full"
              alt="Clutch"
            />
          </div>
          {/* design rush */}
          <div className="w-3/4">
            <Image
              src="https://geekyants.com/_next/static/images/design-rush-fbdd2f9b6d1081016c7df9baf49bb690.svg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full"
              alt="Clutch"
            />
          </div>

          {/* goodfirms */}
          <div className="w-3/4">
            <Image
              src="https://geekyants.com/_next/static/images/goodfirms-7e94804a3d10ceb4f7a85a124648ae03.svg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full"
              alt="Clutch"
            />
          </div>

          {/* upcity marketplace */}
          <div className="w-3/4">
            <Image
              src="https://geekyants.com/_next/static/images/Upcity-6be0ca137aa9e3900c70033f845dec56.svg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full"
              alt="Clutch"
            />
          </div>
        </div>

        {/* addresses */}
        <div className="grid md:grid-cols-3 mt-10 gap-10 pt-12">
          {/* india */}
          <div>
            {/* title */}
            <h6 className="flex items-center">
              <Image
                src="https://geekyants.com/_next/static/images/India-83003bb4d679919eec3d65fb83459007.svg"
                width="0"
                height="0"
                sizes="100vw"
                className="w-6 mr-2"
                alt="India"
              />

              <span className="text-white opacity-70">
                GeekyAnts India Pvt Ltd
              </span>
            </h6>

            {/* address */}
            <address className="mt-3 text-white opacity-70 text-sm font-normal not-italic">
              <span className="block leading-6">
                No. 18, 2nd Cross Road, N S Palya, 2nd Stage
              </span>
              <span className="block leading-6">
                BTM Layout, Bangalore - 560076, Karnataka, India
              </span>
              <div className="leading-6 pt-2 flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-90"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                </svg>

                <span className="block px-3"> +91 9595884422</span>
              </div>
            </address>
          </div>

          {/* uk */}
          <div>
            {/* title */}
            <h6 className="flex items-center">
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDUwMCI+PHBhdGggZmlsbD0iIzAwNiIgZD0iTTAgMGgxMDAwLjAydjUwMC4wMUgweiIvPjxwYXRoIGQ9Ik0wIDB2NTUuOTAzbDg4OC4yMTggNDQ0LjEwOWgxMTEuODAyVjQ0NC4xMUwxMTEuODAyIDBIMHptMTAwMC4wMiAwdjU1LjkwMUwxMTEuODAyIDUwMC4wMUgwdi01NS45MDFMODg4LjIxOCAwaDExMS44MDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTQxNi42NzUgMHY1MDAuMDFoMTY2LjY3VjBoLTE2Ni42N3pNMCAxNjYuNjd2MTY2LjY3aDEwMDAuMDJWMTY2LjY3SDB6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTAgMjAwLjAwNHYxMDAuMDAyaDEwMDAuMDJWMjAwLjAwNEgwek00NTAuMDA5IDB2NTAwLjAxaDEwMC4wMDJWMEg0NTAuMDA5ek0wIDUwMC4wMWwzMzMuMzQtMTY2LjY3aDc0LjUzNUw3NC41MzUgNTAwLjAxSDB6TTAgMGwzMzMuMzQgMTY2LjY3aC03NC41MzVMMCAzNy4yN1Ywem01OTIuMTQ1IDE2Ni42N0w5MjUuNDg1IDBoNzQuNTM1TDY2Ni42OCAxNjYuNjdoLTc0LjUzNXptNDA3Ljg3NSAzMzMuMzRMNjY2LjY4IDMzMy4zNGg3NC41MzVsMjU4LjgwNSAxMjkuNDAzdjM3LjI2N3oiIGZpbGw9IiNjMDAiLz48L3N2Zz4="
                width="0"
                height="0"
                sizes="100vw"
                className="w-6 mr-2"
                alt="India"
              />

              <span className="text-white opacity-70">GeekyAnts UK Ltd</span>
            </h6>

            {/* address */}
            <address className="mt-3 text-white opacity-70 text-sm font-normal not-italic">
              <span className="block leading-6">
                7 Bickleigh House, Frogwell Close, London N15 6ED,
              </span>
              <span className="block leading-6">England, UK</span>
              <div className="leading-6 pt-2 flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-90"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                </svg>

                <span className="block px-3"> 44 7424797407</span>
              </div>
            </address>
          </div>

          {/* us */}
          <div>
            {/* title */}
            <h6 className="flex items-center">
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIzNSIgaGVpZ2h0PSI2NTAiIHZpZXdCb3g9IjAgMCA3NDEwIDM5MDAiPjxwYXRoIGZpbGw9IiNiMjIyMzQiIGQ9Ik0wIDBoNzQxMHYzOTAwSDB6Ii8+PHBhdGggZD0iTTAgNDUwaDc0MTBtMCA2MDBIMG0wIDYwMGg3NDEwbTAgNjAwSDBtMCA2MDBoNzQxMG0wIDYwMEgwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMzAwIi8+PHBhdGggZmlsbD0iIzNjM2I2ZSIgZD0iTTAgMGgyOTY0djIxMDBIMHoiLz48ZyBmaWxsPSIjZmZmIj48ZyBpZD0iZCI+PGcgaWQ9ImMiPjxnIGlkPSJlIj48ZyBpZD0iYiI+PHBhdGggaWQ9ImEiIGQ9Ik0yNDcgOTBsNzAuNTM0IDIxNy4wODItMTg0LjY2LTEzNC4xNjRoMjI4LjI1M0wxNzYuNDY2IDMwNy4wODJ6Ii8+PHVzZSB4bGluazpocmVmPSIjYSIgeT0iNDIwIi8+PHVzZSB4bGluazpocmVmPSIjYSIgeT0iODQwIi8+PHVzZSB4bGluazpocmVmPSIjYSIgeT0iMTI2MCIvPjwvZz48dXNlIHhsaW5rOmhyZWY9IiNhIiB5PSIxNjgwIi8+PC9nPjx1c2UgeGxpbms6aHJlZj0iI2IiIHg9IjI0NyIgeT0iMjEwIi8+PC9nPjx1c2UgeGxpbms6aHJlZj0iI2MiIHg9IjQ5NCIvPjwvZz48dXNlIHhsaW5rOmhyZWY9IiNkIiB4PSI5ODgiLz48dXNlIHhsaW5rOmhyZWY9IiNjIiB4PSIxOTc2Ii8+PHVzZSB4bGluazpocmVmPSIjZSIgeD0iMjQ3MCIvPjwvZz48L3N2Zz4="
                width="0"
                height="0"
                sizes="100vw"
                className="w-6 mr-2"
                alt="India"
              />

              <span className="text-white opacity-70">GeekyAnts Inc</span>
            </h6>

            {/* address */}
            <address className="mt-3 text-white opacity-70 text-sm font-normal not-italic">
              <span className="block leading-6">
                315 Montgomery Street, 9th & 10th Floors,
              </span>
              <span className="block leading-6">
                San Francisco, CA, 94104, USA
              </span>
              <div className="leading-6 pt-2 flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-90"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                </svg>

                <span className="block px-3"> +1(415)2759099</span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="mt-10 bg-[#161617] py-4">
        <div className="container xl:mx-auto flex-col flex md:flex-row justify-between px-8 lg:px-20 2xl:px-40">
          <span className="block text-white tracking-wider opacity-70 font-light text-sm">
            2022 © All rights reserved. GeekyAnts India Pvt Ltd
          </span>

          <span className="block text-white tracking-wider opacity-70 font-light text-sm">
            Privacy Policy | Terms and Conditions
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
