import { z } from 'zod'

const envSchema = z.object({
  SITE_URL: z.string().url().default('https://trugamr.dev'),
})

export function getEnv() {
  return envSchema.parse(process.env)
}
