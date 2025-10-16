import Card from "../components/Card";

const items = [
{ title: "Кот", img: "/images/cat.png", accent: "blue" as const },
{ title: "Ноутбук", img: "/images/laptop.png", accent: "black" as const },
{ title: "Диван", img: "/images/sofa.png", accent: "green" as const },
{ title: "Спорткар", img: "/images/car.png", accent: "black" as const },
{ title: "Плюшевый мишка", img: "/images/bear.png", accent: "blue" as const },
];

export default function Home() {
return (
<section>
<h1 className="text-2xl font-semibold mb-6">Каталог</h1>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
{items.map((i) => (
<Card key={i.title} title={i.title} img={i.img} accent={i.accent} price="9 990 ₽" />
))}
</div>
</section>
);
}
