"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import DownSection2 from "@/components/DownSection2"

const card3 = [
{  val: "$50M+",
  sub: "50+ million sales",},
{  val: "44+",
  sub: "trusted by 44+ brands",},
{  val: "5+",
  sub: "5+ years of experience",}
];

const teamMembers = [
  {
    name: "Amine md",
    role: "Founder + CEO",
    bio: "Founder of Flaylor | 4+ Years in E-commerce & Growth. I don't just scale ads; I engineer profitability. My approach bridges the gap between financial data and marketing decisions to ensure every click drives net profit, not just vanity metrics.",
    img: "/teamAmine.jpg",
  },
  {
    name: "Nassim ben",
    role: "Marketing Manager",
    bio: "Co-founder | 3+ Years building AI-driven growth systems. I merge programming with financial data to engineer high-precision Meta & Google Ads strategies. Specialist in maximizing net profit through smart automation and data-backed retention to ensure sustainable scaling.",
    img: "/teamNassim.png",
  },
  {
    name: "Ethan",
    role: "Data Analyst",
    bio: "5+ Years in E-commerce Intelligence. I specialize in turning complex datasets into actionable net profit strategies. Expert in advanced tracking and performance auditing to ensure every marketing dollar is backed by clean, high-integrity data.",
    img: "/teamEthan.jpg",
  },
  {
    name: "Lucas",
    role: "UX/UI Strategist",
    bio: "6+ Years in Conversion Design. I merge visual psychology with data-driven layouts to transform e-commerce stores into high-output sales machines. Expert in engineering seamless checkout journeys that maximize AOV and eliminate drop-offs.",
    img: "/teamLucas.jpg",
  },
];

const services = [
  { title: "Analysis", description: "We diagnose your entire e-commerce ecosystem, from tracking accuracy to customer behavior. We replace guesswork with a data-driven roadmap by identifying hidden gaps that stall your progress. Our focus is to build a solid factual foundation before moving a single dollar." },
  { title: "Optimization", description: "We engineer high-converting experiences by aligning design psychology with user intent. We transform your digital presence into a high-performance sales machine through rigorous testing of winning messages. Every touchpoint is refined to ensure maximum conversion efficiency." },
  { title: "Scaling", description: "We drive explosive growth by aggressively expanding into new audiences and marketing channels. We activate long-term retention systems to maximize customer lifetime value and repeat purchases. Our priority is scaling your brand’s revenue while maintaining strict bottom-line profitability." },
];

const TeamMemberCard = ({ member, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out w-full max-w-4xl mx-auto mb-12
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="bg-[#051109]/50 backdrop-blur-[120px]  rounded-[20px] px-[24px] py-[24px] border border-[#31F691] transition-all duration-500 group">
        <div className="">
          <div className="flex flex-row  items-center justify-center  gap-[23px]">
          <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-[#1a3a25] shrink-0 group-hover:border-green-500/50 transition-colors">
            <Image src={member.img} alt={member.name} fill sizes="100vw"  priority={index < 2} className="object-cover" />
          </div>
          <div className="flex flex-col flex-1 text-start">
            {/* استعادة الخط الفاخر */}
            <h2 className="text-[31px] font-extralight text-white tracking-widest  font-[Cormorant Garamond]">
              {member.name}
            </h2>
            <p className="text-[20px] text-stone-400  mb-6  ">
              {member.role}
            </p>
           </div>
           </div>
            <div className="w-full h-0.5 bg-[#1a3a25] mb-2 mt-[16px]"></div>
            <div>
            <p className="text-[18px] md:text-xl text-[#B3B3B3] font-light leading-relaxed font-[DM Sans]">
              {member.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const itemsRef = useRef([]);
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.15 }
      );
  
      itemsRef.current.forEach((el) => {
        if (el) observer.observe(el);
      });
  
      return () => observer.disconnect();
    }, []);

  const serviceItemsRef = useRef([]);
  const { ref: teamSectionRef, inView: teamInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    serviceItemsRef.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      {/* الخطوط المستوردة */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=DM+Sans:wght@300;400&display=swap');
        
        .service-item { opacity: 0; transform: translateY(32px); transition: all 0.7s ease; margin-bottom: 72px; }
        .service-item.visible { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* المحتوى العلوي - About & Stats */}
      <section className="flex flex-col items-center text-center m-auto w-[80%] sm:w-[70%] lg:w-[80%]">
        <section className="mt-[100px] flex flex-col gap-[44px]">
          <p className="text-[clamp(40px,8vw,61px)] text-[#969593] font-semibold">About us</p>
          <p className="text-[#1E1E1E] text-[clamp(18px,2.5vw,25px)] max-w-3xl">
            We are an e-commerce growth agency that scales brands by bridging the gap between deep financial analytics and high-performance, conversion-driven marketing.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-[25px] w-full mt-[112px]">
          {card3.map((item, i) => (
            <div  key={i} className="bg-white rounded-2xl h-[238px] flex flex-col justify-center items-center border border-[#D9D9D9] shadow-sm gap-[10px]">
              <p  className="font-bold text-[40px] text-[#757575] poller-one-regular ">{item.val}</p>
              <p  className="text-[18px] text-stone-500">{item.sub}</p>
            </div>
          ))}
        </section>
      </section>

      {/* our philosophy */}
      <section>
        <div className="m-auto w-[92%] sm:w-[60%] py-32">
          <h2 className="text-center text-[#969593] mb-[44px] text-[clamp(20px,8vw,39px)] hide-dmsan">
            Our Philosophy
          </h2>
          <p className="text-lg md:text-xl  text-center text-[#202020] leading-relaxed font-[DM Sans]">
          We sync financial data with marketing decisions to ensure every dollar spent drives net profit, not just vanity sales.
          </p>
        </div>
      </section>
        <h2 className="text-center text-[#969593]  text-[clamp(20px,8vw,39px)] hide-dmsan">
        Our approach
        </h2>
       <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400;500&display=swap');

        
        .services-section {
          padding: 100px 0;
          font-family: 'DM Sans', sans-serif;
        }

        .services-container {
          max-width: 780px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .service-item {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          margin-bottom: 72px;
        }

        .service-item:last-child {
          margin-bottom: 0;
        }

        .service-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .service-item:nth-child(2) { transition-delay: 0.12s; }
        .service-item:nth-child(3) { transition-delay: 0.24s; }

        .service-title {
          font-size: 2rem;
          color: #2d6a4f;
          margin: 0 0 14px 0;
          letter-spacing: 0.01em;
        }

        .service-divider {
          width: 100%;
          height: 1px;
          background-color: #c8d5c0;
          margin-bottom: 24px;
        }

        .service-description {
          font-size: 0.97rem;
          line-height: 1.8;
          color: #555e52;
          font-weight: 300;
          max-width: 660px;
        }
      `}</style>

      <section className="services-section">
        <div className="services-container">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="service-item"
              ref={(el) => { itemsRef.current[i] = el; }}
            >
              <h2 className="service-title">{service.title}</h2>
              <div className="service-divider" />
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section 
  ref={teamSectionRef}
  className="relative min-h-screen py-14 flex flex-col items-center justify-center overflow-hidden "
>
  {/* ─── الدوائر الخلفية مع تأثير السكرول ─── */}
  <div 
    className={`absolute inset-0 z-0 pointer-events-none transition-all duration-[2500ms] ease-out
      ${teamInView ? 'opacity-100 scale-100 blur-[100px]' : 'opacity-0 scale-90 blur-[150px]'}`}
  >
    {/* الدائرة 1: علوية يمين */}
    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#1db954]/20 animate-blob" />
    
    {/* الدائرة 2: سفلية يسار */}
    <div className="absolute bottom-[5%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#14532d]/40 animate-blob [animation-delay:3s]" />
    
    {/* الدائرة 3: في المنتصف لإضاءة الكروت */}
    <div className="absolute top-[30%] left-[25%] w-[450px] h-[450px] rounded-full bg-[#31F691]/10 animate-blob [animation-delay:6s]" />
  </div>

  {/* ─── تأثير الدائرة المتمددة (إذا كنت لا تزال تريده) ─── */}
  <div 
    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-[3000ms] ease-in-out -z-10 
      ${teamInView ? 'scale-[6] opacity-100' : 'scale-0 opacity-0'}`}
    style={{ width: '50vmax', height: '50vmax', backgroundColor: '#080f0a' }} 
  />

  {/* ─── محتوى الفريق ─── */}
  <div className={`container mx-auto px-6 md:px-32 relative z-10 transition-all duration-1000 delay-500
    ${teamInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
    
    <h2 className="text-center text-5xl md:text-[39px] font-extralight text-[#969593] mb-20 font-[Cormorant Garamond]">
      Our core team
    </h2>
    
    <div className="flex flex-col items-center">
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} index={index} />
      ))}
    </div>
  </div>
</section>

  <section className="mt-[130px] space-y-[90px] flex flex-col items-center px-6 md:px-[10%]  lg:px-[20%] ">
    <p className="text-[39px] text-[#969593]">Our Story</p>
    <div className="space-y-[90px] sm:space-y-[130px] ">
    <div className="flex flex-col sm:flex-row items-center space-x-[60px] space-y-[60px]">
      <div>
        <Image src="/Group.png" alt="img1" width={800} height={800} className="object-cover w-[250px] sm:w-[800px]"/>
        
      </div>
      <div className="space-y-[12px]">
        <p className="text-[20px]">A Financial Vision in a Cluttered Market</p>
        <p className="text-[18px] text-[#757575]">Flaylor was founded to address the financial confusion e-commerce founders face. While most agencies focus solely on "driving clicks," we prioritize what truly matters: brand profitability. We don't just manage ads; we build the strategy that ensures every marketing investment translates into real growth for your budget.</p>
      </div>
    </div>
    <div className="flex flex-col-reverse sm:flex-row items-center space-x-[60px] ">
      <div className="space-y-[12px]">
        <p className="text-[20px]">The Gap Between Ad Dashboards and Bank Accounts</p>
        <p className="text-[18px] text-[#757575]">We identified the "silent killer" of growth: the complete disconnect between ad dashboard metrics and actual financial reality. Our mission is to eliminate this confusion, ensuring that the reports you see translate directly into net profit in your bank account, not just vanity numbers.</p>
      </div>
      <div>
        <Image src="/Group2.png" alt="img2" width={600} height={600} className="object-cover w-[200px] sm:w-[600px] mb-[60px] sm:mb-[0px]"/>
      </div>
      
    </div>
    <div className="flex flex-col sm:flex-row items-center space-x-[60px] space-y-[60px]">
      <div>
        <Image src="/Group3.png" alt="img3" width={800} height={800} className="object-cover w-[250px] sm:w-[800px]"/>
      </div>
      <div className="space-y-[12px]">
        <p className="text-[20px]">Driving Growth with Financial Rigor</p>
        <p className="text-[18px] text-[#757575]">Today, we act as the "Financial Brain" for our clients. We believe scaling isn’t about blindly increasing ad spend—it’s about maximizing the efficiency of every dollar. We use deep analytics to ensure every growth decision strengthens your bottom line and ensures long-term financial sustainability.</p>
      </div>
    </div>
    </div>
  </section>

      {/* الخاتمة */}
      <DownSection2 />
    </main>
  );
};

export default About;