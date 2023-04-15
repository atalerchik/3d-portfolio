import { WorkDetails } from "../WorkDetails/WorkDetails";

export function WorkGrid(works: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {works.map((work: any) => (
        <WorkDetails key={work.id} work={work} />
      ))}
    </div>
  );
}
