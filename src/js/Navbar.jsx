export default function Navbar() {
  return (
    <nav class="bg-background border-gray-200 dark:bg-background">
      <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img
          src=".\public\image\LogoAezakmiPyown2.png"
          class="h-20"
          alt="AezakmiPyown Logo"
        />

        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-background rounded-lg bg-background md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-background dark:bg-background md:dark:bg-background dark:border-background">
            <li>
              <a
                href="#"
                class="group transition duration-300 delay-50 block mx-7 py-2 px-3 md:p-0 text-text rounded md:hover:bg-transparent md:hover:text-background md:dark:hover:text-background dark:text-text  dark:hover:text-background md:dark:hover:bg-transparent dark:border-background"
              >
                <img
                  src=".\public\image\Rectangle 6.png"
                  alt=""
                  class="transition duration-300 delay-50 opacity-0 group-hover:opacity-100 absolute"
                />
                <h1 class="relative left-7 z-10 font-bold">HOME</h1>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="group transition duration-300 delay-50  block mx-7 py-2 px-3 md:p-0 text-text rounded md:hover:bg-transparent md:hover:text-background md:dark:hover:text-background dark:text-text  dark:hover:text-background md:dark:hover:bg-transparent dark:border-background"
              >
                <img
                  src=".\public\image\Rectangle 6.png"
                  alt=""
                  class="transition duration-300 delay-50  opacity-0 group-hover:opacity-100 absolute "
                />
                <h1 class="relative left-6 z-10 font-bold">ABOUT</h1>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="group transition duration-300 delay-50  block mx-7 py-2 px-3 md:p-0 text-text rounded md:hover:bg-transparent md:hover:text-background md:dark:hover:text-background dark:text-text  dark:hover:text-background md:dark:hover:bg-transparent dark:border-background"
              >
                <img
                  src=".\public\image\Rectangle 6.png"
                  alt=""
                  class="transition duration-300 delay-50  opacity-0 group-hover:opacity-100 absolute "
                />
                <h1 class="relative left-4 z-10 font-bold">PROJECT</h1>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
