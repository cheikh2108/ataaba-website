export default function DecorativeLines() {
  return (
    <svg className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-[0.05]" preserveAspectRatio="none">
      <line x1="10%" y1="100%" x2="40%" y2="80%" stroke="#06b6d4" strokeWidth="1" className="gsap-line" />
      <line x1="60%" y1="100%" x2="80%" y2="60%" stroke="#06b6d4" strokeWidth="1" className="gsap-line" />
    </svg>
  )
}
