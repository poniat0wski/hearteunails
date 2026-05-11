import About from './components/About'
import BookingPolicies from './components/BookingPolicies'
import BookingProcess from './components/BookingProcess'
import Cta from './components/Cta'
import Faq from './components/Faq'
import Footer from './components/Footer'
import GalleryMoodboard from './components/GalleryMoodboard'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import StickyInspoSection from './components/StickyInspoSection'
import {
  aboutContent,
  bookingIntro,
  bookingSteps,
  brandInfo,
  ctaImages,
  faqItems,
  galleryIntro,
  galleryItems,
  heroContent,
  heroImages,
  inspoCards,
  navLinks,
  policyGroups,
  policiesIntro,
  pricingGroups,
  pricingNotes,
} from './data/siteContent'

function App() {
  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--ink-700)]">
      <Header brandName={brandInfo.name} navLinks={navLinks} />
      <main className="relative min-h-screen overflow-hidden bg-[#fff7fb]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[18%] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-[#ffdbeF]/35 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 top-[44%] h-[430px] w-[430px] rounded-full bg-[#ffe7d2]/28 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-[70%] h-[500px] w-[500px] rounded-full bg-[#ffd9ed]/30 blur-3xl"
        />
        <Hero heroContent={heroContent} heroImages={heroImages} />
        <About aboutContent={aboutContent} />
        <StickyInspoSection inspoCards={inspoCards} />
        <GalleryMoodboard
          title={galleryIntro.title}
          subtitle={galleryIntro.subtitle}
          galleryItems={galleryItems}
        />
        <BookingProcess bookingIntro={bookingIntro} bookingSteps={bookingSteps} />
        <BookingPolicies policiesIntro={policiesIntro} policyGroups={policyGroups} />
        <Pricing pricingGroups={pricingGroups} pricingNotes={pricingNotes} />
        <Faq faqItems={faqItems} />
        <Cta brandInfo={brandInfo} ctaImages={ctaImages} />
      </main>
      <Footer brandInfo={brandInfo} />
    </div>
  )
}

export default App
