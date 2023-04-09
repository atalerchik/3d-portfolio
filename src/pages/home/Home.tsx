export function Home() {
  return (
    <div className="bg-[url('/home-background.jpg')] bg-cover h-screen">
      <div className=" flex items-center h-screen w-5/6 mx-auto">
        <div className="">
          <h1 className="text-6xl md:text-8xl font-bold block"> Hi, I'm Alexey. </h1>
          <p className="text-1xl md:text-2xl my-10 text-slate-300">
            I am a 3D interior designer, at the moment I have more than 100 works
          </p>
          <div className="flex gap-8 w-100 text-slate-300">
            <button className="rounded-full border-stone-300 border-2 py-4 flex-1 hover:bg-blue-100 hover:text-slate-900">
              VIEW MY WORKS
            </button>
            <button className="rounded-full border-stone-300 border-2 py-4 flex-1 hover:bg-blue-100 hover:text-slate-900">
              ABOUT ME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
