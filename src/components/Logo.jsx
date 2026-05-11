function Logo({ className = '' }) {
  return (
    <img
      src="/images/brand/hearteu-logo.png"
      alt="Hearteu Nails logo"
      className={`w-auto object-contain ${className}`}
      loading="eager"
    />
  )
}

export default Logo
