function requireEnv(value: string | undefined, name: string): string {
  const trimmed = value?.trim();

  if (!trimmed) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return trimmed;
}

export const env = {
  mellerApiBaseUrl: requireEnv(
    process.env.NEXT_PUBLIC_MELLER_API_BASE_URL,
    "NEXT_PUBLIC_MELLER_API_BASE_URL",
  ),
  owndaysAssetBaseUrl: requireEnv(
    process.env.NEXT_PUBLIC_OWNDAYS_ASSET_BASE_URL,
    "NEXT_PUBLIC_OWNDAYS_ASSET_BASE_URL",
  ),
} as const;
