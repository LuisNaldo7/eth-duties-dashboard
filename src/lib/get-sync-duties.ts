export async function getSyncDuties() {
  const url = `${process.env.ETH_DUTIES_API}/duties/raw/sync-committee`;
  const res = await fetch(url, { cache: 'no-cache' });
  const data = await res.json();

  return data;
}
