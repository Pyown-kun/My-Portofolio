export default function AboutMe() {
  return (
    <div className="mt-32 ml-36">
      <div className="bg-primary mr-AboutMe rounded-r-full">
        <h1 className="text-background font-bold text-3xl text-center">
          Abaut Me
        </h1>
      </div>

      <div className="grid grid-cols-2 ">
        <dir className="text-text ml-32">
          <p>
            Hi
            <br />
            My Name Andrea Ramadhan Cahya Aryana.
            <br />
            I’m a Game Developer, but I also lern how to make an Art before I
            transition into Developer.
            <br />
            <br />
            <span className="text-primary">My Objective</span> Challenge myself
            in any situasion Environment project for learn, develop and improve
            my skill and contribute more to the company with my abilites.
          </p>
          <div className="mt-12">
            <h1 className="font-bold text-2xl mb-2">Contact</h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2">
                  <li>
                    <p className="text-left">
                      <img
                        className="mt-1 h-5 absolute"
                        src="public\image\Logo\email-svgrepo-com.png"
                        alt=""
                      />
                      <span className="m-6">andrearamadhan123@gmail.com</span>
                    </p>
                  </li>
                  <li>
                    <a href="https://github.com/Pyown-kun">
                      <p className="text-left">
                        <img
                          className="mt-1 h-5 absolute"
                          src="public\image\Logo\github-mark-white.png"
                          alt=""
                        />
                        <span className="m-6">github.com/Pyown-kun</span>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="https://pyown-kun.itch.io/">
                      <p className="text-left">
                        <img
                          className="mt-1 h-5 absolute"
                          src="public\image\Logo\itchio-logo-textless-white.png"
                          alt=""
                        />
                        <span className="m-6">pyown-kun.itch.io</span>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.instagram.com/andrea_rca3/">
                      <p className="text-left">
                        <img
                          className="mt-1 h-5 absolute"
                          src="public\image\Logo\instagram-svgrepo-com.png"
                          alt=""
                        />
                        <span className="m-6">instagram.com/andrea_rca3</span>
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href=""></a>
                    <a href="https://www.linkedin.com/in/andrea-ramadhan-44b0b91a1/">
                      <p className="text-left">
                        <img
                          className="mt-1 h-5 absolute"
                          src="public\image\Logo\linkedin-svgrepo-com.png"
                          alt=""
                        />
                        <span className="m-6">
                          linkedin.com/in/andrea-ramadhan
                        </span>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </dir>
        <dir>
          <div className="flex justify-center items-center">
            <img
              className="h-96 object-cover object-center w-4/12 rounded-t-full rounded-b-full"
              src="public\image\Hanamaru\InActive.png"
              alt=""
            />
          </div>
        </dir>
      </div>

      <div className="mt-20 bg-primary p-5 mr-20 rounded-r-3xl text-background grid grid-cols-2 gap-60">
        <div className="ml-36 mb-2">
          <div>
            <div className="flex">
              <h1 className="font-bold text-2xl">Educatioin</h1>
              <h1 className="ml-10 text-lg outline outline-background rounded-full p-2">
                2022 - now
              </h1>
            </div>
            <p className="mt-5">STMIK Amikom Surakarta - Software Engineer</p>
          </div>

          <div>
            <h1 className="mt-16 font-bold text-2xl">Technical Skill</h1>
            <div className="mt-1">
              <h1 className="font-bold text-xl">C#</h1>
              <div className="w-full h-4 bg-background rounded-md ">
                <div className="h-4 bg-secondary rounded-md cSharp"></div>
              </div>
            </div>
            <div className="mt-1">
              <h1 className="font-bold text-xl">JavaScript</h1>
              <div className="w-full h-4 bg-background rounded-md ">
                <div className="h-4 bg-secondary rounded-md js"></div>
              </div>
            </div>
            <div className="mt-1">
              <h1 className="font-bold text-xl">PHP</h1>
              <div className="w-full h-4 bg-background rounded-md ">
                <div className="h-4 bg-secondary rounded-md php"></div>
              </div>
            </div>
            <div className="mt-1">
              <h1 className="font-bold text-xl">Python</h1>
              <div className="w-full h-4 bg-background rounded-md ">
                <div className="h-4 bg-secondary rounded-md python"></div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="mt-16 font-bold text-2xl">Interest</h1>
            <div className="mt-3 grid grid-cols-2">
              <div class="relative w-40 h-40 ">
                <svg class="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    class="text-red-800  progress-ring__circle stroke-current"
                    stroke-width="10"
                    // stroke-linecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke-dasharray="251.2"
                    stroke-dashoffset="calc(251.2px - (251.2px * 100) / 100)"
                  ></circle>

                  <circle
                    class="text-blue-800  progress-ring__circle stroke-current"
                    stroke-width="10"
                    // stroke-linecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke-dasharray="251.2"
                    stroke-dashoffset="calc(251.2px - (251.2px * 95) / 100)"
                  ></circle>

                  <circle
                    class="text-gray-850  progress-ring__circle stroke-current"
                    stroke-width="10"
                    // stroke-linecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke-dasharray="251.2"
                    stroke-dashoffset="calc(251.2px - (251.2px * 85) / 100)"
                  ></circle>

                  <circle
                    class="text-gray-100  progress-ring__circle stroke-current"
                    stroke-width="10"
                    // stroke-linecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke-dasharray="251.2"
                    stroke-dashoffset="calc(251.2px - (251.2px * 60) / 100)"
                  ></circle>
                </svg>
              </div>

              <div className="mt-5">
                <ul>
                  <li className="flex">
                    <div className="h-3 w-2 mt-2 mr-2 bg-gray-100"></div>
                    <h1 className="font-bold text-lg">Unity</h1>
                  </li>
                  <li className="flex">
                    <div className="h-3 w-2 mt-2 mr-2 bg-gray-800"></div>
                    <h1 className="font-bold text-lg">Unreal Engine</h1>
                  </li>
                  <li className="flex">
                    <div className="h-3 w-2 mt-2 mr-2 bg-blue-800"></div>
                    <h1 className="font-bold text-lg">Godot</h1>
                  </li>
                  <li className="flex">
                    <div className="h-3 w-2 mt-2 mr-2 bg-red-800"></div>
                    <h1 className="font-bold text-lg">Others</h1>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-2xl">Soft Skill</h1>
          <div className="grid grid-cols-3 mt-3">
            <div className="">
              <ul className="font-bold text-lg">
                <li>Teamwork</li>
                <li>Communication</li>
              </ul>
            </div>
            <div className="ml-20 h-16 bg-background w-1"></div>
            <div>
              <ul className="font-bold text-lg">
                <li>Critical Thinking</li>
                <li>Time Management</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-2xl mt-40">Skill Set</h1>
            <div className="grid grid-cols-3 mt-3">
              <div className="">
                <ul className="font-bold text-lg">
                  <li>Web Programing</li>
                  <li>Brainstroming</li>
                </ul>
              </div>
              <div className="ml-20 h-20 bg-background w-1"></div>
              <div>
                <ul className="font-bold text-lg">
                  <li>2D Art</li>
                  <li>3D Modeling</li>
                  <li>Animation 2D/3D</li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-2xl mt-40">Language</h1>
              <div className="grid grid-cols-3 mt-3">
                <div className="">
                  <ul className="font-bold text-lg">
                    <li>Indonesia</li>
                  </ul>
                </div>
                <div className="ml-20 h-8 bg-background w-1"></div>
                <div>
                  <ul className="font-bold text-lg">
                    <li>English</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
