import Logo from './Logo'

function Footer({ brandInfo }) {
  return (
    <footer className="bg-[rgba(255,242,248,0.95)]">
      <div className="mx-auto grid w-full max-w-6xl gap-2 px-4 py-8 text-sm text-[var(--ink-700)] sm:px-6 lg:px-8">
        <div className="inline-flex w-fit rounded-[1.5rem] bg-white/65 px-3 py-2">
          <Logo className="h-14 sm:h-16" />
        </div>
        <p className="text-base font-semibold text-[var(--ink-900)]">{brandInfo.name}</p>
        <p>{brandInfo.location}</p>
        <p>{brandInfo.hours}</p>
        <p>{brandInfo.appointmentType}</p>
        <p>{brandInfo.serviceFormat}</p>
        <p>{brandInfo.noHomeService}</p>
        <p>{brandInfo.addressNote}</p>
        <p>
          Instagram:{' '}
          <a
            href={brandInfo.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[var(--pink-strong)]"
          >
            {brandInfo.instagramHandle}
          </a>
        </p>
        <p>
          WhatsApp:{' '}
          <a
            href={brandInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[var(--pink-strong)]"
          >
            Booking link
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
