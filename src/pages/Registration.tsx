import { useState } from 'react';
import { api } from '../api/client';

type Form = {
firstName: string;
lastName: string;
email: string;
password: string;
agree: boolean;
};

export default function Registration() {
const [form, setForm] = useState<Form>({
firstName: '',
lastName: '',
email: '',
password: '',
agree: false,
});
const [loading, setLoading] = useState(false);
const [result, setResult] = useState<{ok?: boolean; message?: string}>({});

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const { name, value, type, checked } = e.target;
setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
};

const submit = async (e: React.FormEvent) => {
e.preventDefault();
setLoading(true);
setResult({});
try {
const { data } = await api.post('/registration', {
firstName: form.firstName,
lastName: form.lastName,
email: form.email,
password: form.password,
agree: form.agree,
});
setResult({ ok: true, message: data?.message || 'Успешно отправлено' });
} catch (err: any) {
setResult({
ok: false,
message: err?.response?.data?.message || 'Ошибка отправки. Проверьте сервер.',
});
} finally {
setLoading(false);
}
};

const canSubmit =
form.firstName && form.email && form.password && form.agree && !loading;

return ( <div className="max-w-lg mx-auto"> <h2 className="text-2xl font-bold mb-6">Регистрация</h2> <form onSubmit={submit} className="space-y-4 bg-white p-6 rounded-xl border shadow-sm"> <div className="grid gap-1"> <label className="text-sm text-gray-700">Имя</label> <input name="firstName" value={form.firstName} onChange={onChange} className="h-10 px-3 rounded-md border outline-none focus:ring-2 focus:ring-blue-500" placeholder="Иван" /> </div> <div className="grid gap-1"> <label className="text-sm text-gray-700">Фамилия</label> <input name="lastName" value={form.lastName} onChange={onChange} className="h-10 px-3 rounded-md border outline-none focus:ring-2 focus:ring-blue-500" placeholder="Иванов" /> </div> <div className="grid gap-1"> <label className="text-sm text-gray-700">Email</label> <input name="email" type="email" value={form.email} onChange={onChange} className="h-10 px-3 rounded-md border outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" /> </div> <div className="grid gap-1"> <label className="text-sm text-gray-700">Пароль</label> <input name="password" type="password" value={form.password} onChange={onChange} className="h-10 px-3 rounded-md border outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" /> </div> <label className="flex items-center gap-2 text-sm"> <input type="checkbox" name="agree" checked={form.agree} onChange={onChange} className="h-4 w-4" /> Согласен с обработкой персональных данных </label> <button type="submit" disabled={!canSubmit} className={w-full h-11 rounded-md text-white ${canSubmit ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-300 cursor-not-allowed'}} > {loading ? 'Отправка...' : 'Зарегистрироваться'} </button> {result.message && ( <p className={text-sm ${result.ok ? 'text-green-600' : 'text-red-600'}}>{result.message}</p> )} </form> <p className="text-xs text-gray-500 mt-3">POST на http://localhost:8080/registration</p> </div> ); }
