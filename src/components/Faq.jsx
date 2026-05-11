import FAQAccordion from './FAQAccordion'
import SectionHeading from './SectionHeading'

function Faq({ faqItems }) {
  return (
    <section id="faq" className="relative bg-transparent">
      <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Before you book."
          description="Quick answers so your booking feels easy and clear."
          className="mb-8"
        />
        <FAQAccordion faqItems={faqItems} />
      </div>
    </section>
  )
}

export default Faq
