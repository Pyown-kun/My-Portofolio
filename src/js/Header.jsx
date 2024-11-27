export default function Header() {
  return (
    <header>
      <div className="flex justify-center items-center">
        <img
          className="h-borderHeader w-5/6 object-cover object-center rounded-2xl"
          src="public\image\Hanamaru\ZuraBannerGIF6.gif"
          alt=""
        />
      </div>

      <div className="absolute bottom-20 left-60 bg-background rounded-full p-4">
        <img
          className="rounded-full h-80"
          src="public\image\Hanamaru\hanamaru animationGif.gif"
          alt=""
        />
      </div>

      <div className="mt-60 flex justify-center items-center pt-28 pb-40 ml-80 mr-40 rounded-3xl outline outline-primary">
        <h1 className="font-bold text-3xl text-text">
          <img
            className="ml-32 mt-2 absolute "
            src="https://readme-typing-svg.herokuapp.com?font=Teko&weight=600&size=40&duration=1500&pause=1000&vCenter=true&color=a4ce8b&width=435&lines=AEZAKMI%2FANDREA;PYOWN-KUN"
          />
          <span className="mr-96">HI, IM</span>
        </h1>
        <div className="absolute mt-36 ml-96">
          <img
            className=""
            src="https://readme-typing-svg.herokuapp.com?font=Teko&weight=600&size=40&duration=1500&pause=1000&color=EED177&vCenter=true&width=435&lines=GAME+DEVELOPER;ARTIST"
            alt="Typing SVG"
          />
        </div>
      </div>
    </header>
  );
}
