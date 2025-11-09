This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
DropSpot Case Study

Proje Özeti

DropSpot, kullanıcıların ve adminlerin drop (kampanya/ürün) listelerini yönetebildiği bir Next.js + Tailwind CSS web uygulamasıdır.
Projenin amacı, modern frontend teknolojileri kullanarak CRUD işlemleri, token tabanlı authentication, ve responsive tasarım içeren bir admin paneli ve kullanıcı login akışı tasarlamaktır.

Kullanılan Teknolojiler
Katman	Teknoloji
Frontend	Next.js 16 (App Router), React 18
UI & Styling	Tailwind CSS
HTTP İstekleri	Axios
State Management	React Hooks (useState, useEffect)
Build Tools	Turbopack / PostCSS / Tailwind CLI
Özellikler
Kullanıcı Login

Email & şifre ile giriş

Hatalı girişlerde kullanıcıya hata mesajı

Login sırasında loading spinner ve buton disable

Başarılı giriş sonrası token localStorage’a kaydediliyor

Admin Panel

Token tabanlı authentication

Drops CRUD (Create, Read, Update, Delete)

Token geçerlilik kontrolü ve süresi dolan token ile login yönlendirmesi

Responsive ve modern UI (Tailwind CSS ile tasarlandı)

Uygulama Akışı
flowchart TD
    A[Kullanıcı Login] --> B{Token Geçerli mi?}
    B -->|Evet| C[Drop Listesi Görüntüleme]
    B -->|Hayır| D[Login Sayfasına Yönlendirme]
    C --> E[Drop Oluşturma]
    C --> F[Drop Güncelleme]
    C --> G[Drop Silme]


Kullanıcı /login sayfasından giriş yapar.

Admin /admin/login sayfasından giriş yapar.

Başarılı login sonrası token alınır ve localStorage’a kaydedilir.

Admin panelinde drop listesi görüntülenir, yeni drop eklenebilir, var olan drop güncellenebilir veya silinebilir.

Token geçerliliği kontrol edilerek kullanıcı güvenliği sağlanır.

Teknik Detaylar
API Yapısı

utils/api.js içinde axios ile basit HTTP client oluşturuldu

Admin ve kullanıcı tarafı ayrı API çağrılarıyla yönetildi

Tailwind CSS Entegrasyonu

Global stil (app/globals.css):

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background-color: #f9fafb;
}


Component bazlı stil: Tailwind sınıfları ile responsive tasarım

Admin Dashboard Örnek Kod
const api = axios.create({ baseURL: 'http://localhost:3000' });

const fetchDrops = async () => {
  const res = await api.get("/drops");
  setDrops(res.data);
};

Kurulum
git clone <repo-url>
cd DropSpot/frontend
npm install
npm run dev
cd DropSpot/backend
node src/server.js

önce backend çalıştırılmalı sonra frontend
Local: http://localhost:3000

Dev server Turbopack kullanıyor, gerekirse NEXT_DISABLE_TURBOPACK=1 ayarlanabilir

Zorluklar ve Çözümler

Turbopack ve Tailwind CSS hataları → PostCSS konfigürasyonu ve @tailwindcss/postcss ile çözüldü

adminApi import hataları → Axios ile client oluşturularak çözüldü

Production build hataları → App Router ve default export React component düzenlendi

Öğrenilenler ve Kazanımlar

Next.js 16 App Router ile component ve page yönetimi

Tailwind CSS ile modern responsive UI tasarımı

JWT token tabanlı authentication ve localStorage kullanımı

CRUD işlemleri ve API yönetimi

Turbopack ve PostCSS konfigürasyonu ile frontend build süreci yönetimi

Gelecek Geliştirme Planları

Backend ile gerçek veri entegrasyonu (Node.js + Express + MongoDB/PostgreSQL)

Admin ve kullanıcı rolleri için detaylı yetkilendirme

Responsive UI iyileştirmeleri ve dark mode

JWT refresh token ve logout mekanizması


POSTMAN OVERVIEW 
!(image.png)
![alt text](image-1.png)
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)
![alt text](image-5.png)
![alt text](image-6.png)
![alt text](image-7.png)
![alt text](image-8.png)

FRONTEND GÖRÜNTÜLERİ
![alt text](image-9.png)
![alt text](image-10.png)
![alt text](image-11.png)
![alt text](image-12.png)
