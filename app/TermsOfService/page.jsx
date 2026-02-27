import React from 'react'

const TermsOfService = () => {
  return (
    <div>
      <div className='relative w-full overflow-x-hidden text-center px-6 md:px-[10%] lg:px-[20%] bg-[#F8F8F8]'>
        <main className="w-full pt-10">
          
          {/* Hero Section */}
          <header className="text-center mb-20 mt-20 space-y-6">
            <h1 className='text-[#757575] text-[clamp(32px,7vw,61px)] font-medium leading-tight  tracking-tight'>
              Terms of Service
            </h1>
            <p className="text-[16px] sm:text-[20px] text-gray-600 max-w-3xl mx-auto">
              By accessing our services or completing our onboarding forms, you agree to be bound by these terms. FLAYLOR provides financial engineering, marketing management, and strategic consulting designed to scale e-commerce brands.
            </p>
          </header>

          {/* Sections Wrapper */}
          <div className="space-y-16 max-w-4xl mx-auto">
            
            {/* Section 1 */}
            <section className="space-y-4 text-start">
              <h2 className="text-[24px] sm:text-[39px] text-[#757575] leading-tight">
                Client Responsibilities (The Data Accuracy)
              </h2>
              <div className="space-y-4 text-[#202020]">
                <p>Our "Profit Engineering" is built on the data you provide:</p>
                <ul className="list-disc pl-5 space-y-3">
                  <li><strong>Accuracy:</strong> You are responsible for the accuracy of all financial data (COGS, shipping costs, fixed expenses). FLAYLOR is not liable for profit miscalculations resulting from inaccurate data provided by the client.</li>
                  <li><strong>Access:</strong> To deliver results, you agree to provide necessary access to , Ad accounts, and relevant financial tools.</li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4 text-start">
              <h2 className="text-[24px] sm:text-[39px] text-[#757575] leading-tight">
                Scope of Service & "Safe Scaling"
              </h2>
              <div className="space-y-4 text-[#202020]">
                <p>Strategy: FLAYLOR implements a "Safe Scaling" methodology. While we aim for maximum profitability, market conditions and platform algorithms (Meta, Google, etc.) are outside our direct control.</p>
                <p><strong>No Guarantee of Specific ROAS:</strong> We focus on Net Profit. We do not guarantee a specific ROAS (Return on Ad Spend) as it fluctuates based on market competition and product demand.</p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-4 text-start">
              <h2 className="text-[24px] sm:text-[39px] text-[#757575] leading-tight">
                Payment & Fees
              </h2>
              <div className="space-y-4 text-[#202020]">
                <p><strong>Service Fees:</strong> All fees are agreed upon in the initial proposal and are non-refundable once the strategic work/onboarding has commenced.</p>
                <p><strong>Ad Spend:</strong> Clients are responsible for paying ad platforms (Meta/Google) directly. FLAYLOR fees cover management and strategy only.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4 text-start">
              <h2 className="text-[24px] sm:text-[39px] text-[#757575] leading-tight">
                Confidentiality & Non-Disclosure (NDA)
              </h2>
              <div className="space-y-4 text-[#202020]">
                <p>FLAYLOR agrees to keep all your business data, profit margins, and supplier information strictly confidential.</p>
                <p>Your data will never be shared with competitors or used for any purpose other than your brand's growth.</p>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4 text-start">
              <h2 className="text-[24px] sm:text-[39px] text-[#757575] leading-tight">
                Termination of Service
              </h2>
              <div className="space-y-4 text-[#202020]">
                <p>Either party may terminate the agreement with a [30-day] written notice. Upon termination, FLAYLOR will revoke its access to your accounts, and any outstanding fees must be settled immediately.</p>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-4 text-start">
              <h2 className="text-[24px] sm:text-[39px] text-[#757575] leading-tight">
                Limitation of Liability
              </h2>
              <div className="space-y-4 text-[#202020]">
                <p>FLAYLOR shall not be liable for any indirect, incidental, or consequential damages (including loss of data or business interruption) arising from the use of our strategic advice. We provide recommendations; the final business decision rests with the client.</p>
              </div>
            </section>

            {/* Section 7 */}
            <section className="space-y-4 pb-20 text-start border-t pt-10">
              <h2 className="text-[24px] sm:text-[39px] text-[#757575] leading-tight">
                Modifications to Terms
              </h2>
              <div className="space-y-4 text-[#202020]">
                <p>We reserve the right to update these terms at any time. Continued use of our services after changes are posted constitutes acceptance of the new terms.</p>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  )
}

export default TermsOfService