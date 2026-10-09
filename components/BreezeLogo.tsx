import type { SVGProps } from "react";

/**
 * BreezeMark — the circular "breeze + cloud" icon from the Breeze Host logo,
 * rebuilt as a clean, scalable SVG using the sampled palette.
 */
export function BreezeMark({ className = "h-10 w-10", ...props }: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      role="img"
      aria-label="Breeze Host"
      {...props}
    >
      <circle cx="58" cy="56" r="40" fill="#D3EFF8" stroke="#233B42" strokeWidth="5" />
      <g stroke="#233B42" strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M38 44 Q 52 34 66 44" />
        <path d="M35 56 Q 53 45 71 56" />
        <path d="M39 68 Q 52 60 63 68" />
      </g>
      <g transform="translate(50 52) scale(2.9)">
        <path
          d="M6.5 19a4.5 4.5 0 0 1-.36-8.99A6 6 0 0 1 17.7 9.6A4.5 4.5 0 0 1 17.5 19z"
          fill="#ffffff"
          stroke="#233B42"
          strokeWidth="5"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
}

/**
 * BreezeLogo — the full lockup: mark above the two-line wordmark,
 * matching the stacked, centre-aligned layout of the original.
 */
export function BreezeLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`}>
      <BreezeMark className="h-14 w-14" />
      <span className="mt-1 text-center">
        <span className="block text-2xl font-extrabold tracking-tight text-deep">Breeze</span>
        <span className="block text-lg font-semibold tracking-[0.08em] text-teal-dark">Host</span>
      </span>
    </span>
  );
}
