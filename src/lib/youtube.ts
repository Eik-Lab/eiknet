const VIDEO_ID_PATTERN = /^[a-zA-Z0-9_-]{11}$/;

/**
 * Trekker ut YouTube-video-ID fra vanlige URL-formater:
 * watch?v=, youtu.be/, embed/, shorts/, live/.
 */
export function extractYoutubeId(url: string): string | null {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }

  const host = parsed.hostname.replace(/^www\.|^m\./, "");

  if (host === "youtu.be") {
    const id = parsed.pathname.slice(1);
    return VIDEO_ID_PATTERN.test(id) ? id : null;
  }

  if (host === "youtube.com" || host === "youtube-nocookie.com") {
    if (parsed.pathname === "/watch") {
      const id = parsed.searchParams.get("v");
      return id && VIDEO_ID_PATTERN.test(id) ? id : null;
    }
    const match = parsed.pathname.match(
      /^\/(?:embed|shorts|live)\/([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  }

  return null;
}
