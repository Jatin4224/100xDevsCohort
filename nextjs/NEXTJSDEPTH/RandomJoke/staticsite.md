### **1️⃣ Server-Side Rendering (SSR)**

✅ **Definition**: The HTML for each request is generated on the server **at runtime** before being sent to the client.

✅ **When to Use**: When you need fresh data on each request (e.g., user-specific data, dashboards, stock prices).

✅ **Key Function in Next.js**: `getServerSideProps`

### **Example**: Fetching data on every request

```tsx
export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return { props: { data } };
}

export default function Page({ data }: { data: any }) {
  return <div>Data: {data.message}</div>;
}
```

🔹 **Pros**: Fresh data on each request, good for personalized content.

🔹 **Cons**: Higher **server load**, **slower response times** compared to static pages.

---

### **2️⃣ Client-Side Rendering (CSR)**

✅ **Definition**: The page loads first, and data is fetched **on the client-side** using JavaScript.

✅ **When to Use**: When SEO is not a priority (e.g., dashboards, user profiles, single-page apps).

✅ **Key Function in Next.js**: `useEffect` for fetching data

### **Example**: Fetching data after page load

```tsx
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>Data: {data ? data.message : "Loading..."}</div>;
}
```

🔹 **Pros**: Fast initial load, less server load.

🔹 **Cons**: **SEO issues**, blank screen before data loads.

---

### **3️⃣ Static Site Generation (SSG)**

✅ **Definition**: The HTML is pre-generated **at build time** and served as a static file.

✅ **When to Use**: When data doesn’t change often (e.g., blogs, documentation, marketing pages).

✅ **Key Function in Next.js**: `getStaticProps`

### **Example**: Pre-rendering data at build time

```tsx
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return { props: { data } };
}

export default function Page({ data }: { data: any }) {
  return <div>Data: {data.message}</div>;
}
```

🔹 **Pros**: Fastest performance, great for SEO.

🔹 **Cons**: **Stale data** until next build unless `revalidate` is used.

---

### **🔍 Quick Comparison Table**

| Rendering Method | When HTML is Generated   | Best For                         | SEO-Friendly?           | Data Freshness              |
| ---------------- | ------------------------ | -------------------------------- | ----------------------- | --------------------------- |
| **SSR**          | On request (server)      | User-specific data, dashboards   | ✅ Yes                  | ✅ Always fresh             |
| **CSR**          | After page load (client) | Single-page apps, interactive UI | ❌ No (unless hydrated) | ✅ Always fresh             |
| **SSG**          | At build time (static)   | Blogs, docs, landing pages       | ✅ Yes                  | ❌ Stale unless revalidated |

---

### **🔹 Which One to Use in an Interview?**

- If asked about performance → **SSG** is the fastest.
- If asked about SEO → **SSR or SSG** is better than CSR.
- If asked about dynamic data → **SSR or CSR** (CSR for non-critical data).
- If asked about real-time updates → **SSR with caching or CSR with polling/SW**.

---

## Static site Genration

Whenever you build a `nextjs app`, some pages can be statically generated.

Static generation = HTML is built at build time and is served directly.

Static Site Generation (SSG) in **Next.js** allows you to pre-render pages at build time, generating static HTML files that can be served quickly. This improves performance and SEO.

which cant be changed
