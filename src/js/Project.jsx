export default function Project() {
  return (
    <div className="mt-32 ml-36">
      <div className="bg-primary mr-AboutMe rounded-r-full">
        <h1 className="text-background font-bold text-3xl text-center">
          My Project
        </h1>
      </div>

      <div className="flex items-center justify-center mt-10 bg-secondary mx-96 rounded-t-3xl">
        <h1 className="font-bold text-3xl text-background">ART</h1>
      </div>
      <div className="outline outline-secondary mr-20 p-7 rounded-xl">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <img
              className="rounded-3xl mt-10"
              src="public\image\Art\Illustration2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-3xl"
              src="public\image\Art\Cube.png"
              alt=""
            />
            <img
              className="rounded-3xl mt-5"
              src="public\image\Art\Ball.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
