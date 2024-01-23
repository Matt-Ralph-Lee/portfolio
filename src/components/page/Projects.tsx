import Card from "../ui/Card";

export default function Projects() {
  return (
    <div className="flex items-center bg-bg text-base font-montserrat text-baseblack">
      <div className="mx-10 md:mx-52 my-8 md:my-12 w-full">
        <div className="my-5 text-xl md:text-3xl tracking-widest">Projects</div>
        <div className="my-5 text-base md:text-lg tracking-widest">Web Dev</div>
        <div className="flex my-8 justify-between">
          <Card width="w-24 md:w-80" height="h-36 md:h-48" />
          <Card width="w-24 md:w-80" height="h-36 md:h-48" />
          <Card width="w-24 md:w-80" height="h-36 md:h-48" />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-fill md:w-3/5">
            <div className="my-5 text-base md:text-lg tracking-widest">
              Machine Learning
            </div>
            <div className="flex justify-between md:pr-24">
              <div className="flex flex-col justify-between">
                <Card width="w-44 md:w-72" height="h-20 md:h-32" />
                <Card width="w-44 md:w-72" height="h-20 md:h-32" />
              </div>
              <div>
                <Card width="w-36 md:w-56" height="h-44 md:h-72" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <div className="my-5 text-base md:text-lg tracking-widest">
              Mobile App
            </div>
            <Card width="w-full" height="h-32 md:h-72" />
          </div>
        </div>
      </div>
    </div>
  );
}
