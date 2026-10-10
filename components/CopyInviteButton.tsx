"use client";

import { useState } from "react";

export default function CopyInviteButton({ invite }: { invite: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(invite);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (older browser or denied permission): open the invite instead.
      window.open(invite, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/15"
    >
      {copied ? "Invite link copied" : "Copy invite link"}
    </button>
  );
}
