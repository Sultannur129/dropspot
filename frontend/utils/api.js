const API_BASE = "http://localhost:3000"; // Backend URL


/*function getAuthHeaders() {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}*/
export function getAuthHeaders() {
  const token = localStorage.getItem('token');
  if (!token) return {};
  return { Authorization: `Bearer ${token}` };
}


export function getUserIdFromToken() {
  try {
    const token = localStorage.getItem('token');
    if (!token) return null;

    const payload = JSON.parse(atob(token.split('.')[1])); // JWT payload decode
    return payload.id || null;  // <--- burada userId değil id kullan
  } catch {
    return null;
  }
}


// Admin login fonksiyonu
export async function adminLogin(email, password) {
  try {
    const res = await axios.post(`${API_BASE}/admin/login`, { email, password });
    return res.data;
  } catch (err) {
    return { error: err.response?.data?.error || "Sunucu hatası" };
  }
}

// Admin drop listeleme
export async function getAdminDrops(token) {
  try {
    const res = await axios.get(`${API_BASE}/admin/drops`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    return { error: err.response?.data?.error || "Sunucu hatası" };
  }
}

// Admin API objesi
export const adminApi = {
  login: adminLogin,
  getDrops: getAdminDrops,
};



/*export function getUserIdFromToken() {
  try {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.id;
  } catch {
    return null;
  }
}*/


export async function login(email, password) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  localStorage.setItem('token', res.token);
  return res.json();
}

export async function signup(email, password) {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}


export async function getDrops() {
  const res = await fetch(`${API_BASE}/drops`, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}` // opsiyonel, token varsa
  }
});

  if (!res.ok) throw new Error("Drops alınamadı");
  return res.json();
}

/*export async function joinWaitlist(dropId) {
  //const userId = getUserIdFromToken();
  //if (!userId) throw new Error('Kullanıcı giriş yapmamış');

  const res = await fetch(`${API_BASE}/drops/${dropId}/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify({ userId }),
  });
  return res.json();
}*/


export async function joinWaitlist(dropId) {
  const userId = getUserIdFromToken();
  if (!userId) throw new Error('Kullanıcı giriş yapmamış');

  const res = await fetch(`${API_BASE}/drops/${dropId}/join`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify({ userId }),
  });

  return res.json();
}



export async function leaveWaitlist(dropId) {
  const userId = getUserIdFromToken();
  if (!userId) throw new Error('Kullanıcı giriş yapmamış');

  const res = await fetch(`${API_BASE}/drops/${dropId}/leave`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify({ userId }),
  });
  return res.json();
}

export async function claimDrop(dropId) {
  const userId = getUserIdFromToken();
  if (!userId) throw new Error('Kullanıcı giriş yapmamış');

  const res = await fetch(`${API_BASE}/drops/${dropId}/claim`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify({ userId }),
  });
  return res.json();
}
