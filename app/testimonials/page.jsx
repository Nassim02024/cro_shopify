"use client";

import React from 'react';
export  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      position: "CEO of an Apparel Line",      
      quote: "It’s rare to find people in this industry who have the heart of a teacher Most agencies see you as a monthly retainer but with Flaylor I felt seen as a human being They helped us navigate a really tough recession by pivoting our strategy based on real time financial data not just creative trends We doubled our net profit in 60 days because they taught us how to stop gambling and start calculating Their support was pivotal during our most challenging season and for that I am forever grateful"
    },
    {
      id: 2,
      name: "David R",
      position: "Founder of Skinkar",    
      quote: "Before meeting you and the Flaylor team I spent my nights staring at Shopify dashboards seeing huge revenue numbers but wondering why my bank account stayed empty it was exhausting other agencies just told me to spend more on ads but you did something different you sat down with me and looked at my actual margins you treated my business like it was your own family legacy today I don't just have a store I have a profitable business that allows me to actually spend time with my kids without checking my phone every five minutes",
    },
    {
      id: 3,
      name: "Mark Thompson",
      position: "E-commerce Director",      
      quote: "I was one of the biggest skeptics after being let down by marketing agencies before but with you guys you proved me wrong you aligned our Meta ads with our unit economics so perfectly that every dollar spent now has a clear purpose we stopped chasing vanity metrics and started chasing real net profit it is truly a relief I thank you for your credibility and I wish you success",
    },
    {
      id: 4,
      name: "Amanda",
      position: "CEO of Glow Essentials",    
      quote: "I thought our problem was just the ads but you showed us that the gap was in not linking our marketing to our financial data regarding the design it was amazing especially when you focused on the entire customer journey we did not expect to see a 150% improvement in conversion rates so quickly honestly working with you is the best investment we have made for our brand’s growth thank you",
    },
    {
      id: 5,
      name: "Mark",
      position: "Entrepreneur",      
      quote: "we were hitting good sales but we did not know where the profits were going you helped us bridge the gap between marketing and finance and by improving the UI/UX and focusing on unit economics we achieved incredible results in just 60 days I will be honest with you guys you understand both the language of money and the language of design together and that is the secret of our success with them it is great working with you",
    },
    {
      id: 6,
      name: "Jennifer W",
      position: "Marketing Director",    
      quote: "our biggest challenge was scaling because every time we increased our ad spend our profits would shrink despite achieving high sales you designed a strategy based on financial logic and thanks to this approach we quadrupled our sales in just 60 days while maintaining a healthy net profit I will say it honestly if it weren't for you we would still be struggling it is great to continue working with you",
    },
    {
      id: 7,
      name: "Steven",
      position: "Brand Owner",    
      quote: "what sets you apart is your care for my success as if you were partners in the brand you helped me get through tough times and optimize our landing pages to be more persuasive i no longer feel like i am gambling my money on facebook and google instead i have a clear system that achieves sustainable growth and net profit that i actually feel in my bank account every month",
    },
    {
      id: 8,
      name: "Emily S",
      position: "Operations Manager",    
      quote: "working with you was the best decision we made for our growth and what I liked most about you is not just your handling of campaigns but your analysis of the core of the business as a whole which is something wonderful I wish I had done personally before and I want to thank you for providing us with a clear and transparent view of our profits after deducting every dollar and now we are scaling sustainably and profitably finally frankly I did not know what to do without you",
    },
    {
      id: 9,
      name: "Chris",
      position: "Founder",    
      quote: "scaling was a nightmare for me as other agencies just kept telling me to spend more but you focused on fixing my financial problems and this is something i appreciate a lot we tripled our sales in two months and more importantly we now know that every dollar we spend returns a real net profit and what i liked most about you is that you do not sell illusions but achieve results based on numbers",
    },
    {
      id: 10,
      name: "Thomas E",
      position: "Founder of LuxDecor",    
      quote: "we had a beautiful website but it was not selling we were pouring thousands into ads and i thought the problem was our advertising method you rebuilt the entire customer journey based on our financial data the results were enough to change the course of our business as our conversion rate jumped by 50% in the first month and for the first time we know exactly how much net profit we make from every sale can you believe that hhhhh our store evolved from just a digital storefront into a high performance revenue engine thank you"
     },
    {
      id: 11,
      name: "Michael B",
      position: "CEO of Urban Gear Co",   
      quote: "I have dealt with many agencies that promised imaginary profits but you were the only agency that asked in detail about the financial data at first it seemed strange to me but I understood the situation this focus that puts the client’s interest and financial health first made me feel secure you built a financial system linked directly to marketing decisions which helped us overcome a difficult economic season with growth we did not think was possible I appreciate your effort and I hope our partnership lasts" 
     },
    {
      id: 12,
      name: "Rachel",
      position: "Founder of EcoStep",    
      quote:"what i liked most about working with you was the clarity no complex jargon or empty promises you dove into our financial figures and designed high converting landing pages and explained how every marketing decision affects our bottom line we achieved 200% growth in record time because we finally started making decisions based on financial facts rather than guesswork"
    }
  ];

export default function TestimonialsPage() {


  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br py-20 mt-[80px]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#969593] mb-4">
             Testimonials
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Real-life experiences told through true stories
          </p>
        
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="">
      <div className="container mx-auto px-4">
    

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="break-inside-avoid bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Client Info */}
              <div className="mb-6">
                <h3 className="text-lg font-bold">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
              
              {/* Quote */}
              <p className="text-gray-700 leading-relaxed text-[15px] italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Verified Badge (Optional - لمسة إضافية) */}
              
            </div>
          ))}
        </div>
      </div>
    </section>

  
    </main>
  );
}