export function getSiteUrl(request: Request) {
  const url = new URL(request.url)
  console.log(url.host)
  const host =
    request.headers.get('X-Forwarded-Host') ??
    request.headers.get('host') ??
    url.host
  return `${url.protocol}//${host}`
}
