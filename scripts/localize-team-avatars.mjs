import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const avatars = {
  "sirius-w": "https://siriusw823-avatar.pages.dev/IMAG2263_1.jpg",
  jimmy: "https://avatars.githubusercontent.com/u/68285469",
  kaiyasi: "https://cloud.serelix.xyz/s/bG4jndARb5QzpgJ/download",
  "r3x-dj": "https://r3xdj.pages.dev/img/icy_star.png",
  "cgm-97": "https://cgm-csie.me/img/Profile.png",
  steven: "https://steventeng.uk/steven-drawing.png",
  wuzuan: "https://wuzuantw.com/images/favicon.png",
  br3ach: "https://avatars.githubusercontent.com/u/177837321",
  fan: "https://casperlin100w.github.io/image/sidebar/avatar.jpg",
};

const outputDirectory = join(import.meta.dirname, "../public/images");

for (const [id, url] of Object.entries(avatars)) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`${id}: ${response.status} ${response.statusText} (${url})`);
  const source = Buffer.from(await response.arrayBuffer());
  const image = sharp(source);
  const { format, width, height } = await image.metadata();
  if (!format || !width || !height) throw new Error(`${id}: response is not an image (${url})`);

  const output = await image
    .resize(400, 400, { fit: "cover", withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toBuffer();
  await writeFile(join(outputDirectory, `team-${id}.webp`), output);
  console.log(`${id}: ${width}x${height} ${format} (${source.length} bytes) → ${output.length} bytes`);
}
