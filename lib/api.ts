const BASE = "https://dramabox.sansekai.my.id/api/dramabox";

export const api = {
  populer: () => fetch(`${BASE}/populersearch`).then(r => r.json()),
  search: (q: string) => fetch(`${BASE}/search?query=${q}`).then(r => r.json()),
  detail: (id: string) => fetch(`${BASE}/detail?bookId=${id}`).then(r => r.json()),
  episodes: (id: string) => fetch(`${BASE}/allepisode?bookId=${id}`).then(r => r.json())
};