type Props = { size?: number; className?: string };

/** techyGondal avatar mark: the yellow tg circle with a blue and white kerb ring. */
export function TgMark({ size = 40, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" className={className} role="img" aria-label="techyGondal">
      <circle cx="100" cy="100" r="100" fill="#FFFFFF" />
      <circle cx="100" cy="100" r="95" fill="none" stroke="#1E6BFF" strokeWidth="10" strokeDasharray="14.92 14.92" />
      <circle cx="100" cy="100" r="89" fill="#FFD100" />
      <text
        x="98"
        y="134"
        textAnchor="middle"
        fontFamily="Saira, sans-serif"
        fontWeight="900"
        fontStyle="italic"
        fontSize="104"
        letterSpacing="-3"
        fill="#1B1F4B"
      >
        tg
      </text>
    </svg>
  );
}
