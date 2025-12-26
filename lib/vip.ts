const KEY = "vip_limit";

export function canWatchVip(): boolean {
  const data = JSON.parse(localStorage.getItem(KEY) || "{}");
  const today = new Date().toDateString();

  if (data.date !== today) {
    localStorage.setItem(KEY, JSON.stringify({ date: today, count: 1 }));
    return true;
  }

  if (data.count < 10) {
    data.count++;
    localStorage.setItem(KEY, JSON.stringify(data));
    return true;
  }

  return false;
}