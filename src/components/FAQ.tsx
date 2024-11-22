import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQ() {
  return (
    <div className='lg:w-[840px] mx-5 mb-20 lg:mx-auto'>
      <h2 className='text-3xl px-4 mb-20 lg:text-6xl font-semibold text-center leading-[119%] mx-auto'>
        FAQs
      </h2>
      <Accordion
        type='single'
        collapsible
        defaultValue='item-1'
        className='w-full'
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger>How does it work?</AccordionTrigger>
          <AccordionContent>
            Once you purchase a plan you are prompted with a link to get instant
            access to our 2 premium indicators directly on your TradingView
            charts. It works fully on the free plan of TradingView
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>What markets can I use it with?</AccordionTrigger>
          <AccordionContent>
            Once you purchase a plan you are prompted with a link to get instant
            access to our 2 premium indicators directly on your TradingView
            charts. It works fully on the free plan of TradingView
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Can i win every trade using this?</AccordionTrigger>
          <AccordionContent>
            Once you purchase a plan you are prompted with a link to get instant
            access to our 2 premium indicators directly on your TradingView
            charts. It works fully on the free plan of TradingView
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
