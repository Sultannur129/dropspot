/*import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function Dashboard() {
  const [drops, setDrops] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", drop_time: "", claim_window: 10 });
  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;
  const api = "http://localhost:3000";

  const fetchDrops = async () => {
    const res = await api.get("/drops");
    setDrops(res.data);
  };

  useEffect(() => {
  if (!token) {
    router.push("/admin/login");
    return;
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    if (Date.now() > exp) {
      localStorage.removeItem("adminToken");
      router.push("/admin/login");
      return;
    }
  } catch {
    router.push("/admin/login");
    return;
  }

  // async fonksiyon içinde fetchDrops çağrısı
  const fetch = async () => {
    await fetchDrops();
  };
  fetch();
}, []);


  

  const handleCreate = async () => {
    await api.post("/drops", form);
    setForm({ title: "", description: "", drop_time: "", claim_window: 10 });
    fetchDrops();
  };

  const handleUpdate = async (id) => {
    const newTitle = prompt("Yeni başlık:");
    if (!newTitle) return;
    await api.put(`/drops/${id}`, { title: newTitle });
    fetchDrops();
  };

  const handleDelete = async (id) => {
    await api.delete(`/drops/${id}`);
    fetchDrops();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Admin Dashboard</h2>
      
      <div>
        <h3>Yeni Drop</h3>
        <input placeholder="Başlık" value={form.title} onChange={e => setForm({...form, title: e.target.value})}/>
        <input placeholder="Açıklama" value={form.description} onChange={e => setForm({...form, description: e.target.value})}/>
        <input type="datetime-local" value={form.drop_time} onChange={e => setForm({...form, drop_time: e.target.value})}/>
        <input type="number" placeholder="Claim Window" value={form.claim_window} onChange={e => setForm({...form, claim_window: Number(e.target.value)})}/>
        <button onClick={handleCreate}>Oluştur</button>
      </div>

      <h3>Drop Listesi</h3>
      {drops.map(d => (
        <div key={d.id} style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}>
          <p>Başlık: {d.title}</p>
          <p>Açıklama: {d.description}</p>
          <p>Drop Zamanı: {new Date(d.drop_time).toLocaleString()}</p>
          <button onClick={() => handleUpdate(d.id)}>Güncelle</button>
          <button onClick={() => handleDelete(d.id)}>Sil</button>
        </div>
      ))}
    </div>
  );
}*/


'use client';

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [drops, setDrops] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    drop_time: "",
    claim_window: 10
  });

  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  // Axios instance
  const api = axios.create({
    baseURL: "http://localhost:3000", // Backend URL
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    },
  });

  // Drops verilerini getir
  const fetchDrops = async () => {
    try {
      const res = await api.get("/drops");
      setDrops(res.data);
    } catch (err) {
      console.error(err);
      alert("Drops verisi getirilemedi");
    }
  };

  // Token kontrolü
  useEffect(() => {
    if (!token) {
      router.push("/admin/login");
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const exp = payload.exp * 1000;
      if (Date.now() > exp) {
        localStorage.removeItem("adminToken");
        router.push("/admin/login");
        return;
      }
    } catch {
      router.push("/admin/login");
      return;
    }

    // async fonksiyon içinde fetchDrops çağrısı
  const fetch = async () => {
    await fetchDrops();
  };
  fetch();
  }, []);

  // Drop oluştur
  const handleCreate = async () => {
    try {
      await api.post("/drops", form);
      setForm({ title: "", description: "", drop_time: "", claim_window: 10 });
      fetchDrops();
    } catch (err) {
      console.error(err);
      alert("Drop oluşturulamadı");
    }
  };

  // Drop güncelle
  const handleUpdate = async (id) => {
    const newTitle = prompt("Yeni başlık:");
    if (!newTitle) return;
    try {
      await api.put(`/drops/${id}`, { title: newTitle });
      fetchDrops();
    } catch (err) {
      console.error(err);
      alert("Drop güncellenemedi");
    }
  };

  // Drop sil
  const handleDelete = async (id) => {
    if (!confirm("Bu drop silinecek. Devam edilsin mi?")) return;
    try {
      await api.delete(`/drops/${id}`);
      fetchDrops();
    } catch (err) {
      console.error(err);
      alert("Drop silinemedi");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Yeni Drop</h3>
        <input
          placeholder="Başlık"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <input
          placeholder="Açıklama"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <input
          type="datetime-local"
          value={form.drop_time}
          onChange={e => setForm({ ...form, drop_time: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <input
          type="number"
          placeholder="Claim Window"
          value={form.claim_window}
          onChange={e => setForm({ ...form, claim_window: Number(e.target.value) })}
          className="border p-2 rounded mr-2 w-28"
        />
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Oluştur
        </button>
      </div>

      <h3 className="text-xl font-semibold mb-2">Drop Listesi</h3>
      {drops.length === 0 && <p>Henüz drop yok.</p>}
      {drops.map(d => (
        <div
          key={d.id}
          className="border p-4 rounded mb-4 flex flex-col gap-2"
        >
          <p><strong>Başlık:</strong> {d.title}</p>
          <p><strong>Açıklama:</strong> {d.description}</p>
          <p><strong>Drop Zamanı:</strong> {new Date(d.drop_time).toLocaleString()}</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => handleUpdate(d.id)}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            >
              Güncelle
            </button>
            <button
              onClick={() => handleDelete(d.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Sil
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}



/*'use client';
import { useEffect, useState } from "react";
import { adminApi } from "../../utils/api";

export default function Dashboard() {
  const [drops, setDrops] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setError("Giriş yapmanız gerekiyor");
      return;
    }

    const fetchDrops = async () => {
      const res = await adminApi.getDrops(token);
      if (res.error) setError(res.error);
      else setDrops(res);
    };

    fetchDrops();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="grid gap-4">
        {drops.length === 0 && !error && <p>Drop bulunamadı</p>}
        {drops.map((drop) => (
          <div key={drop.id} className="p-4 bg-white rounded-lg shadow">
            <h2 className="font-semibold text-lg">{drop.name}</h2>
            <p>Drop zamanı: {new Date(drop.drop_time).toLocaleString()}</p>
            <p>Waitlist: {drop.waitlists.length} kişi</p>
            <p>Claims: {drop.claims.length} kişi</p>
          </div>
        ))}
      </div>
    </div>
  );
}*/

