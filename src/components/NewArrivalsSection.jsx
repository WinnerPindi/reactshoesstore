import { Card } from "./Card";

export function NewArrivalsSection({ items }) {
  return (
    <div className=" mt-20">
      <div className="flex-center">
        <div className="bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold">
          NEW ARRIVALS
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-y-24 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
