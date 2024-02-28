export async function getAttestationDuties() {
  const url = `${process.env.ETH_DUTIES_API}/duties/raw/attestation`;
  const res = await fetch(url, { cache: 'no-cache' });
  const data = await res.json();

  return data;
}
