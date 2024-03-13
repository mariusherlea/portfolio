export default function myImageLoader({ src, width, quality }) {
  if (src.startsWith('data:')) {
    return src;
  }
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
}
