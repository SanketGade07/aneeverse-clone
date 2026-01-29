import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Booking = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "secret" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        // @ts-ignore
        hideBranding: true,
        styles: {
            body: {
                background: "transparent"
            }
        }
      });
    })();

    // Mutation observer to penetrate Shadow DOM and hide skeletons
    const observer = new MutationObserver(() => {
        // Target the custom element that holds the shadow root
        const calInlines = document.querySelectorAll('cal-inline');
        
        calInlines.forEach(inline => {
            if (inline.shadowRoot) {
                const skeleton = inline.shadowRoot.querySelector('#skeleton-container');
                if (skeleton instanceof HTMLElement) {
                    skeleton.style.display = 'none';
                    skeleton.style.visibility = 'hidden';
                    skeleton.style.height = '0';
                    skeleton.style.opacity = '0';
                    skeleton.style.pointerEvents = 'none';
                }
            }
        });

        // Fallback for non-shadow elements
        const globalSkeletons = document.querySelectorAll('#skeleton-container, [id*="skeleton-container"]');
        globalSkeletons.forEach(el => {
            if (el instanceof HTMLElement) {
                el.style.display = 'none';
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#03151a] pt-16 md:pt-24 pb-16 md:pb-20">
      <div className="max-w-[1400px] mx-auto px-0">
        <style>
          {`
            [class*="mb-6"][class*="mt-auto"][class*="pt-6"],
            [class*="p-2"][class*="text-center"][class*="text-xs"][class*="max-w-3xl"],
            div.p-2.text-center.text-xs.max-w-3xl,
            span.mb-6.mt-auto.pt-6,
            div[class*="text-center"][class*="text-xs"] a[href*="cal.com"],
            div[class*="text-center"][class*="text-xs"] img,
            section[aria-label="Booking site"] footer,
            .cal-element-embed-dark [class*="branding"],
            #skeleton-container {
              display: none !important;
              visibility: hidden !important;
              height: 0 !important;
              opacity: 0 !important;
              pointer-events: none !important;
            }
          `}
        </style>
        <div className="text-center px-6 mb-10 md:mb-12">
          <h2 className="text-[26px] md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] mb-4 font-bw-gradual tracking-tight">
            Together, Let's Create<br className="hidden md:block" /> Something Really Incredible
          </h2>
          <p className="text-gray-400 text-[14px] md:text-lg font-['Poppins'] max-w-[320px] md:max-w-none mx-auto leading-relaxed">
            FREE 15-Min Strategy Call – For Founders Ready to Scale Fast!
          </p>
        </div>

        {/* Unified Responsive Calendar Container */}
        <div className="px-4 md:px-0">
          <div 
            className="max-w-[1300px] mx-auto rounded-[2rem] shadow-2xl border border-[rgba(45,200,230,.1)] overflow-hidden pt-0 md:pt-24"
            style={{ background: 'linear-gradient(135deg, #072d36 0%, #073742 100%)' }}
          >
            {/* Desktop: Use absolute positioning to crop footer. Mobile: Use relative and tighten height to remove empty space. */}
            <div className="relative h-[620px] md:h-[580px]">
              <div className="w-full h-full md:absolute md:top-0 md:left-0 md:h-[750px]">
                <Cal
                  namespace="secret"
                  calLink="sanket-gade-r6mxkt/secret"
                  style={{ width: "100%", height: "100%" }}
                  config={{ 
                      layout: "month_view", 
                      useSlotsViewOnSmallScreen: "true",
                      theme: "dark"
                  }}
                />
              </div>
            </div>
          </div>
        </div>


        <div className="text-center hidden md:block mt-12">
            <p className="text-white/20 text-[10px] tracking-[0.2em] uppercase font-medium">
                Powered by Cal.com
            </p>
        </div>





      </div>
    </section>
  );
};

export default Booking;