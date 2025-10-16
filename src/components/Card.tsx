type Props = {
title: string;
price?: string;
img: string;
accent?: "green" | "black" | "blue";
};

export default function Card({ title, price, img, accent = "blue" }: Props) {
const accentRing = {
green: "ring-green-500",
black: "ring-gray-800",
blue: "ring-blue-500",
}[accent];

return (
<div className={bg-white rounded-xl shadow-sm ring-1 ring-gray-200 overflow-hidden hover:shadow-md transition}>
<div className={aspect-[4/3] bg-gray-100 grid place-items-center ring-inset ${accentRing}}>
<img src={img} alt={title} className="max-h-full max-w-full object-contain" />
</div>
<div className="p-4">
<h3 className="font-medium">{title}</h3>
{price && <p className="text-sm text-gray-500 mt-1">{price}</p>}
<button className="mt-3 inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-white text-sm hover:bg-blue-700">
В корзину
</button>
</div>
</div>
);
}
