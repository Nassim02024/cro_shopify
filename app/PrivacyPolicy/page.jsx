import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div>
      <div className='relative w-full overflow-x-hidden text-center px-6 md:px-[10%] lg:px-[20%]'>
        <main className="w-full pt-10">
          {/* Hero Section */}
      <header className="text-center mb-20 mt-20 space-y-6">
        <h1 className='text-[#757575] text-[clamp(32px,7vw,61px)] font-medium leading-tight'>
          Privacy Policy
        </h1>
        <p className="  text-[16px] sm:text-[20px] text-gray-600">
         At FLAYLOR, we take your business data seriously. This policy outlines how we collect, use, and protect the information you provide us—whether through our website, onboarding forms, or during our strategic consulting sessions.        </p>
      </header>

      {/* Sections Wrapper */}
      <div className="space-y-16 max-w-4xl mx-auto">
        
        {/* Section 1 */}
        <section className="space-y-4 text-start">
          <h2 className="text-[24px] sm:text-[39px]  text-[#757575]">
            Financial & Business Data (The Deep-Dive)
          </h2>
          <div className="space-y-4 text-[#202020] ">
            <p>Unlike standard websites, we collect specific business data to perform our Profit Engineering services, including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cost of Goods Sold (COGS) & Expenses: Shared via secure forms for financial analysis.</li>
              <li>Ad Account Access: To monitor and optimize performance.</li>
              <li>Shopify/Store Data: To track real-time net profits and inventory.</li>
            </ul>
            <p className="">Note: This data is used exclusively for your business growth and is never shared with third parties or competitors.</p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-4 text-start">
          <h2 className="text-[24px] sm:text-[39px]  text-[#757575]">
            Cookies & Tracking
          </h2>
          <div className="space-y-4 text-[#202020]">
            <p>We use cookies to enhance your experience on our site:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Functional Cookies: To remember your preferences and login details (last for 1 year).</li>
              <li>Analytical Cookies: To understand how visitors interact with our strategy pages, helping us improve our service delivery.</li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4 text-start">
          <h2 className="text-[24px] sm:text-[39px]  text-[#757575]">
            Embedded Content from Other Websites
          </h2>
          <div className="space-y-4 text-[#202020]">
            <p>Our site may include embedded content (e.g., Calendly for booking, Loom videos, or financial tools).</p>
            <p>These external sites may collect data or use cookies. We recommend reviewing their individual privacy policies.</p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 text-start">
          <h2 className="text-[24px] sm:text-[39px]  text-[#757575]">
            Data Retention & Security
          </h2>
          <div className="space-y-4 text-[#202020]">
            <p><strong>Business Records:</strong> We retain your financial analysis and campaign data as long as you are an active partner to ensure historical performance tracking.</p>
            <p><strong>Security:</strong> We implement strict digital security measures to protect your "Break-even" points and "Profit Margins" from unauthorized access.</p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-4 text-start">
          <h2 className="text-[24px] sm:text-[39px]  text-[#757575]">
            Your Rights Over Your Data
          </h2>
          <div className="space-y-4 text-[#202020]">
            <p>You have total control over your information:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Access & Export: You can request an export of all the strategic data we hold about you.</li>
              <li>Erasure (The Right to be Forgotten): You can request that we delete your data at any time, except for data we are legally obligated to keep for tax or administrative purposes.</li>
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section className="space-y-4 pb-10 text-start">
          <h2 className="text-[24px] sm:text-[39px]  text-[#757575]">
            Where Your Data is Sent
          </h2>
          <div className="space-y-4 text-[#202020]">
            <p><strong>Spam Detection:</strong> Visitor inquiries may be checked through automated spam detection.</p>
            <p><strong>Strategic Tools:</strong> Your data may be processed through secure analytical tools (e.g., Google Sheets, specialized Financial Dashboards) used by the FLAYLOR team.</p>
          </div>
        </section>

      </div>
    </main>
  </div>
  </div>
  )
}

export default PrivacyPolicy