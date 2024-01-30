export function CartItem({ item }) {
  return (
    <div className="flex p-2 bg-gray-50 hover:bg-[#DAFFA2] cursor-pointer">
      <img className="h-24" src={item.src} />
      <div className="space-y-2">
        <div className="font-bold ">{item.title}</div>
        <div className="font-sm text-gray-400 ">{item.description}</div>
        <div className="font-bold">{item.price}$</div>
      </div>
    </div>
  );
}
