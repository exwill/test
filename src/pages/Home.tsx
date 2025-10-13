import cat from '../assets/cat.png';
import laptop from '../assets/laptop.png';
import sofa from '../assets/sofa.png';
import car from '../assets/car.png';
import bear from '../assets/bear.png';
import { Link } from 'react-router-dom';

type Card = { id: string; title: string; img: string; price: string; color?: string };

const items: Card[] = [
{ id: '1', title: 'Кот', img: cat, price: 'Бесценно' },
{ id: '2', title: 'Ноутбук', img: laptop, price: '120 000 ₽' },
{ id: '3', title: 'Диван', img: sofa, price: '65 000 ₽' },
{ id: '4', title: 'Спорткар', img: car, price: 'позвоните' },
{ id: '5', title: 'Плюшевый мишка', img: bear, price: '2 500 ₽' },
];

export default function Home() {
return (
<div className="space-y-8">
<section className="text-center">
<h1 className="text-3xl md:text-4xl font-bold">Подборка из дизайна</h1>
<p className="text-gray-600 mt-2">Пример страницы на React + TS + Tailwind</p>
</section>

  <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.map((i) => (
      <div key={i.id} className="bg-white rounded-xl shadow-sm border overflow-hidden flex flex-col">
        <div className="h-52 grid place-items-center bg-gradient-to-br from-gray-50 to-white">
          <img src={i.img} alt={i.title} className="max-h-48 object-contain" />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-semibold text-lg">{i.title}</h3>
          <p className="text-gray-600 mt-1">{i.price}</p>
          <div className="mt-auto pt-4 flex gap-3">
            <button className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200">В корзину</button>
            <Link to="/registration" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>
    ))}
  </section>
</div>
); }
