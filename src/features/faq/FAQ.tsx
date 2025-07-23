import React from 'react'
import FAQSection from './FAQSection'
import FAQHeading from './FAQHeading'

const FAQ = () => {
  return (
    <div className='flex flex-col gap-8 text-left pt-6 break-words font-roboto'>
        <FAQSection>
            <FAQHeading content='🎬 Watch Movies & TV Shows Online – Only on Watchverse'/>
            <p>
                Watchverse is your gateway to unlimited streaming of high-quality movies and TV shows
                – entirely free, with no account or credit card required.
                Whether you're into action-packed blockbusters or cozy binge-worthy series,
                Watchverse has you covered — fast, safe, and seamless.
            </p>
        </FAQSection>
        <FAQSection>
            <FAQHeading content='❓ What is Watchverse?'/>
            <p>
                Watchverse is a modern streaming platform designed to be the ultimate free
                alternative to subscription-based services like Netflix.
                With an ever-expanding library of HD content, our goal is to make high-quality entertainment
                accessible to everyone — without the burden of fees or annoying popups.
            </p>
        </FAQSection>
        <FAQSection>
            <FAQHeading content='🚀 Why Choose Watchverse?'/>
            <li>🎞️ Thousands of HD movies and shows</li>
            <li>🧠 Smart recommendations & categories</li>
            <li>📱 Mobile-friendly & Chromecast ready</li>
            <li>💬 Subtitles included for most titles</li>
            <li>🔒 No registration. No ads. No tracking</li>
            <li>⚡ Fast load times, instant streaming</li>
            <li>🆕 Updated daily with fresh content</li>
        </FAQSection>
        <FAQSection>
            <FAQHeading content='🔐 Is Watchverse Safe to Use?'/>
            <p>
                Yes. Unlike many "free streaming" sites flooded with malware or suspicious ads,
                Watchverse is ad-free and tracking-free. We don’t ask for personal info or log your data.
                No popups, no sketchy redirects — just pure content and a clean experience.
            </p>
        </FAQSection>

        <FAQSection>
            <FAQHeading content='⚖️ Is Watchverse Legal?'/>
             <p>
                Watchverse operates under fair-use principles and serves as a content aggregator.
                While we do our best to ensure content safety and compliance,
                users are responsible for how they access and use the platform.
                Always stream responsibly and use a VPN if you're unsure of your region’s policies.
             </p>
        </FAQSection>
       
        <FAQSection>
            <FAQHeading content='🌍 Can I Use Watchverse Anywhere?'/>
            <p>
                Absolutely! Watchverse is available worldwide and designed for all devices
                — PC, Mac, tablet, and mobile.
                If you ever face a regional block, a reliable VPN can help restore access.
            </p>
        </FAQSection>
    </div>
  )
}

export default FAQ