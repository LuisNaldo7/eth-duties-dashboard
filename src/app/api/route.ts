import { getAttestationDuties } from '@/lib/get-attestation-duties';
import { getBlockDuties } from '@/lib/get-block-duties';
import { getSyncDuties } from '@/lib/get-sync-duties';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const attestations = await getAttestationDuties();
  const blocks = await getBlockDuties();
  const syncs = await getSyncDuties();

  return NextResponse.json({ attestations, blocks, syncs }, { status: 200 });
}
