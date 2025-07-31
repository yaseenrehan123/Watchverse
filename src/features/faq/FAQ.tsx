import React from 'react'
import FAQSection from './FAQSection'
import FAQHeading from './FAQHeading'
import { MdMovie } from "react-icons/md";
const FAQ = () => {
    return (
        <div className='flex flex-col gap-8 text-left pt-6 break-words font-roboto'>
            <FAQSection>
                <FAQHeading>
                    <span>
                        Browse Through Millions Of Movies And Tv Shows! 🎬
                    </span>
                </FAQHeading>
                <p>
                    Watchverse allows you to browse through millions of different movies and tv shows,
                    filter them by genres and check various details about them.
                </p>
            </FAQSection>
            <FAQSection>
                <FAQHeading><span>Can I 'Watch' Content here❓</span></FAQHeading>
                <p>
                    Unfortunately no, Watchverse is not a streaming platform, only a movie review aggregator.
                </p>
            </FAQSection>
            <FAQSection>
                <FAQHeading><span>Is Watchverse safe to use? 🔐</span></FAQHeading>
                <p>
                    Yes, Watchverse is 100% safe to use, as their are no ads or any embedded content from malicious sources.
                </p>
            </FAQSection>
            <FAQSection>
                <FAQHeading>Third Party API's? 🖥️</FAQHeading>
                <p>Watchverse is made possible thanks to API from <a href='https://www.themoviedb.org/' target='blank' className='text-purple-700'> TMDB </a>
                    (The Movie Database). Watchverse uses data provided by TMDB under their free API license.
                    We do not claim ownership of any content provided.
                </p>
            </FAQSection>
            <FAQSection>
                <FAQHeading>Legal Disclaimer ⚖️</FAQHeading>
                <p>
                    Watchverse does not host or stream any media content. All data is sourced from public APIs and displayed under their terms of use. All trademarks and copyrights belong to their respective owners.
                </p>
            </FAQSection>
            <FAQSection>
                <FAQHeading>Credits And Copyright ©️</FAQHeading>
                <p>
                    This site was built by <a href='https://github.com/yaseenrehan123' target='blank' className='text-purple-700'>yaseenrehan123 </a>
                    All third-party content (e.g. movie titles, posters, descriptions) is © of their respective owners. Watchverse does not claim ownership over any such material.
                </p>
            </FAQSection>
        </div>
    )
}

export default FAQ