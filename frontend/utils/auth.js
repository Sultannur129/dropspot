export function getUserIdFromToken() {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split('.')[1])); // JWT payload
    return payload.id; // Prisma users.id
  } catch (err) {
    console.error('Token parse hatası:', err);
    return null;
  }
}
