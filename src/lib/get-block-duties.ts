export async function getBlockDuties() {
  const url = `${process.env.ETH_DUTIES_API}/duties/raw/proposing`;
  const res = await fetch(url, { cache: 'no-cache' });
  const data = await res.json();

  return data;
}
