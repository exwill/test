import { FormEvent, useState } from "react";
import { api } from "../api/client";

type Form = { name: string; email: string; password: string };

export default function Register() {
const [form, setForm] = useState<Form>({ name: "", email: "", password: "" });
const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
const [error, setError] = useState<string | null>(null);

const onSubmit = async (e: FormEvent) => {
e.preventDefault();
setStatus("loading"); setError(null);
try {
const res = await api.post("/registration", form);
if (res.status >= 200 && res.status < 300) setStatus("success");
else throw new Error("Ошибка регистрации");
} catch (e:any) {
setStatus("error");
setError(e?.response?.data?.message || e.message || "Ошибка");
}
};

return (
<section className="max-w-md mx-auto">
<h1 className="text-2xl font-semibold mb-6">Регистрация</h1>
<form onSubmit={onSubmit} className="space-y-4">
<div>
<label className="block text-sm mb-1">Имя</label>
<input
className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
value={form.name}
onChange={e => setForm(f => ({...f, name: e.target.value}))}
required
/>
</div>
<div>
<label className="block text-sm mb-1">Email</label>
<input
type="email"
className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
value={form.email}
onChange={e => setForm(f => ({...f, email: e.target.value}))}
required
/>
</div>
<div>
<label className="block text-sm mb-1">Пароль</label>
<input
type="password"
className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
value={form.password}
onChange={e => setForm(f => ({...f, password: e.target.value}))}
required
minLength={6}
/>
</div>

    <button
      type="submit"
      disabled={status==="loading"}
      className="w-full rounded-md bg-blue-600 text-white py-2 hover:bg-blue-700 disabled:opacity-60"
    >
      {status==="loading" ? "Отправка..." : "Зарегистрироваться"}
    </button>

    {status==="success" && <p className="text-green-600 text-sm">Успех! Проверьте почту.</p>}
    {status==="error" && <p className="text-red-600 text-sm">{error}</p>}
  </form>
</section>
);
}
