import Card from "../ui/Card";

export default function Projects() {
  return (
    <div className="flex items-center bg-bg text-base font-montserrat text-baseblack">
      <div className="mx-10 md:mx-52 my-8 md:my-12 w-full">
        <div className="my-5 text-xl md:text-3xl tracking-widest">Projects</div>
        <div className="my-5 text-base md:text-lg tracking-widest">Web Dev</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Card width="w-full" height="h-32 md:h-36" />
          <Card width="w-full" height="h-32 md:h-36" />
          <Card width="w-full" height="h-32 md:h-36" />
        </div>
        <div className="pt-3 grid grid-cols-4 md:grid-cols-12 grid-rows-8 md:grid-rows-5 gap-4 md:gap-6">
          <div className="pt-4 md:pt-10 text-base md:text-lg tracking-widest col-span-4 md:col-span-7 row-span-1">
            Machine Learning
          </div>
          <div className="md:pt-10 text-base md:text-lg tracking-widest col-span-4 md:col-span-5 row-span-1 hidden md:block">
            Mobile App
          </div>
          <Card
            width="w-full col-span-2 md:col-span-4"
            height="h-full row-span-2"
          />
          <Card
            width="w-full col-span-2 md:col-span-3"
            height="h-full row-span-4"
          />
          <Card
            width="w-full col-span-5"
            height="h-full row-span-4 hidden md:block"
          />
          <Card
            width="w-full col-span-2 md:col-span-4"
            height="h-full row-span-2"
          />
          <div className="flex items-end md:pt-10 text-base md:text-lg tracking-widest col-span-4 md:col-span-5 row-span-1 md:hidden">
            Mobile App
          </div>
          <Card
            width="w-full col-span-4 md:col-span-5"
            height="h-full row-span-4 block md:hidden"
          />
        </div>
      </div>
    </div>
  );
}
