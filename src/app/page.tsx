"use client";

import Scrollytelling from "@/components/Scrollytelling";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactInfo: "",
    serviceRequired: "Freight Forwarding",
    origin: "",
    destination: "",
    instructions: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Mimic API logic log
    console.log("Quote request submitted:", formData);
  };

  return (
    <main className="bg-white min-h-screen text-slate-700">
      {/* 
        The Scrollytelling component contains the 15,000px height scroller
        and the sticky canvas.
      */}
      <Scrollytelling />

      {/* --- SECTION 1: ABOUT US --- */}
      <section id="about" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-slate-100 z-20 scroll-mt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,144,255,0.04)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-12 relative">
          <div className="w-full md:w-5/12">
            <span className="text-[#0090FF] text-xs font-bold tracking-widest uppercase">Our Identity</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 text-glow-light">
              About ClearEarth Logistics LLC
            </h2>
          </div>
          <div className="w-full md:w-7/12 flex flex-col items-start gap-8">
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              ClearEarth Logistics LLC is a reliable and customer-focused logistics company committed to delivering efficient, secure, and cost-effective shipping solutions. We specialize in domestic and international freight services, including air freight, sea freight, road transport, warehousing, and last-mile delivery. 
            </p>
            <p className="text-base text-slate-500 leading-relaxed font-light">
              Our team is dedicated to providing seamless supply chain solutions tailored to businesses and individuals. Whether you need express shipping, bulk cargo transport, customs clearance assistance, or end-to-end logistics management, ClearEarth Logistics ensures timely delivery with full transparency and care. Contact ClearEarth Logistics today to experience dependable service and logistics solutions you can trust.
            </p>
            <a 
              href="#services" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0090FF] hover:bg-[#22C55E] transition-all duration-300 rounded-full text-sm font-semibold tracking-wide text-white hover:shadow-[0_0_20px_rgba(0,144,255,0.3)]"
            >
              Explore Our Capabilities
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: CORE SERVICES --- */}
      <section id="services" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#F8FAFC] border-t border-slate-100 z-20 scroll-mt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.03)_0%,rgba(248,250,252,0)_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-[#22C55E] text-xs font-bold tracking-widest uppercase">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 text-glow-light">
              Our Integrated Logistics Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Block 1 */}
            <div className="bg-white border border-slate-100 p-8 rounded-2xl flex flex-col justify-between hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">Global Multi-Modal Freight Management</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                  Comprehensive Freight Management & Air/Sea/Land Coordination Solutions. We plan and execute global cargo movement using optimized shipping routes to reduce overall transit expenses. Enjoy direct carrier negotiations and international space bookings that ensure reliable cargo allocation even during peak shipping seasons.
                </p>
                <ul className="space-y-2 mb-8 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0090FF]" />
                    Less-than-Container Load (LCL) consolidation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0090FF]" />
                    Full Container Load (FCL) sea freight
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0090FF]" />
                    Expedited air cargo networks
                  </li>
                </ul>
              </div>
              <a href="#quote" className="text-[#0090FF] hover:text-[#22C55E] text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 group mt-auto transition-colors">
                Book Freight Capacity
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Service Block 2 */}
            <div className="bg-white border border-slate-100 p-8 rounded-2xl flex flex-col justify-between hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">Tailored Warehousing & Distribution Solutions</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                  Tailored warehousing, distribution, and supply chain solutions. Scalable storage and fulfillment infrastructure engineered to match your variable business volumes. Utilize bonded and non-bonded warehouse facilities equipped with real-time Warehouse Management Systems (WMS) for absolute inventory accuracy.
                </p>
                <ul className="space-y-2 mb-8 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0090FF]" />
                    In-facility cargo consolidation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0090FF]" />
                    Expert palletization
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0090FF]" />
                    Custom product labeling & final-mile distribution
                  </li>
                </ul>
              </div>
              <a href="#quote" className="text-[#0090FF] hover:text-[#22C55E] text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 group mt-auto transition-colors">
                Check Warehouse Availability
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Service Block 3 */}
            <div className="bg-white border border-slate-100 p-8 rounded-2xl flex flex-col justify-between hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">ClearEarth Supply Chain Management</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                  ClearEarth logistics solutions managing every stage seamlessly. A single, accountable partnership covering your cargo's journey from factory origin to the end customer. We consolidate international freight, local customs brokerage, storage, and cross-border trucking into one unified, friction-free workflow.
                </p>
                <ul className="space-y-2 mb-8 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0090FF]" />
                    Integrated supply chain flow
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0090FF]" />
                    Automated cross-docking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0090FF]" />
                    Centralized multi-point milestone tracking
                  </li>
                </ul>
              </div>
              <a href="#quote" className="text-[#0090FF] hover:text-[#22C55E] text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 group mt-auto transition-colors">
                Consult Our Supply Chain Experts
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Service Block 4 */}
            <div className="bg-white border border-slate-100 p-8 rounded-2xl flex flex-col justify-between hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">Advanced Temperature-Controlled Distribution</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                  Temperature-controlled solutions ensuring product integrity from origin to delivery. Advanced refrigerated transport networks keeping climate-sensitive assets stable from origin to delivery. Continuous monitoring of humidity and temperature parameters ensures total security for high-value food, beverage, and medical cargo.
                </p>
                <ul className="space-y-2 mb-8 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0090FF]" />
                    Strict Pharma & Food GDP compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0090FF]" />
                    Continuous temperature telemetry
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0090FF]" />
                    Climate-controlled warehouse hubs
                  </li>
                </ul>
              </div>
              <a href="#quote" className="text-[#0090FF] hover:text-[#22C55E] text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 group mt-auto transition-colors">
                Secure Your Cold Chain
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: CUSTOMS CLEARANCE --- */}
      <section id="customs" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-slate-100 z-20 scroll-mt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,144,255,0.03)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-3xl mb-16">
            <span className="text-[#0090FF] text-xs font-bold tracking-widest uppercase">Compliance & Brokerage</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 text-glow-light">
              Strategic Customs Brokerage & Compliance Excellence
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-light mt-6">
              We eliminate regulatory friction at major entry ports to prevent operational delays and minimize storage costs. ClearEarth Logistics operates directly at key UAE trade gateways to keep your cargo moving legally and quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:border-slate-200 transition-colors">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Streamlined Import & Export Clearance</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Comprehensive preparation of inbound/outbound documentation, automated HS code classification, and precise customs duty calculations for rapid port release.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:border-slate-200 transition-colors">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Gateway Mastery</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Direct operational footprint spanning Jebel Ali Port, Dubai World Central (DWC), and high-frequency GCC land borders.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:border-slate-200 transition-colors">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Specialized Pharma & Cold Chain Clearance</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Rapid, time-sensitive processing for temperature-controlled medical supplies, ensuring fast approvals from the Ministry of Health and Prevention (MOHAP).
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:border-slate-200 transition-colors">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Secure Dangerous Goods (DG) Handling</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Certified management of hazardous cargo with complex regulatory permits from Dubai Municipality and Civil Defence.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:border-slate-200 transition-colors">
              <h4 className="text-lg font-bold text-slate-900 mb-2">High-Volume E-commerce Support</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Accelerated last-mile delivery via high-frequency, automated B2C customs clearance and optimized VAT processing.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:border-slate-200 transition-colors">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Heavy Machinery Project Cargo</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Securing specialized permits for out-of-gauge industrial machinery, managing heavy-lift inspections, and leveraging official duty exemptions.
              </p>
            </div>
          </div>

          <div className="p-8 bg-[#F8FAFC] border border-slate-100 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <p className="text-base text-slate-800 font-semibold">
              Facing a border hold or need an HS code cleared? Talk to our certified Dubai customs brokers today.
            </p>
            <a 
              href="#quote" 
              className="px-6 py-3 bg-[#0090FF] hover:bg-[#22C55E] transition-all duration-300 rounded-full text-sm font-semibold tracking-wide text-white hover:shadow-[0_0_20px_rgba(0,144,255,0.3)] shrink-0"
            >
              Clear Your Cargo Now
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: LAND TRANSPORT --- */}
      <section id="transport" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#F8FAFC] border-t border-slate-100 z-20 scroll-mt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(34,197,94,0.03)_0%,rgba(248,250,252,0)_70%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-3xl mb-16">
            <span className="text-[#22C55E] text-xs font-bold tracking-widest uppercase">GCC Distribution Network</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 text-glow-light">
              Asset-Backed Over-the-Road Freight Across the UAE & GCC
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-light mt-6">
              ClearEarth Logistics offers reliable ground transportation engineered for speed, safety, and price efficiency. From single-pallet loads to heavy industrial equipment, we synchronize cross-border routes to move your over-the-road cargo with absolute precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white border border-slate-100 p-8 rounded-2xl hover:border-slate-200 transition-colors shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Less-than-Truckload (LTL) Consolidation</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Smart groupage networks that combine smaller shipments heading along matching transit lines, providing flexible, scheduled departures across major regional routes.
              </p>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-2xl hover:border-slate-200 transition-colors shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Full Truckload (FTL) Transport</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Direct, point-to-point over-the-road transportation dedicated exclusively to your inventory, utilizing a modern fleet of Box, Curtain-Sided, and Open-Top trailers.
              </p>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-2xl hover:border-slate-200 transition-colors shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Cross-Border GCC Trucking</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Seamless transit corridors connecting the UAE directly to major commercial centers in Saudi Arabia, Oman, and the broader MENA region.
              </p>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-2xl hover:border-slate-200 transition-colors shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Temperature-Controlled Reefer Fleets</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                State-of-the-art reefer trailers with built-in telemetry to maintain continuous, certified climate conditions for perishables.
              </p>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-2xl hover:border-slate-200 transition-colors shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Hazardous Materials (HAZMAT) Transport</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Move restricted or dangerous cargo safely with our fully certified fleet and safety-trained, ADR-compliant drivers.
              </p>
            </div>
            <div className="bg-white border border-slate-100 p-8 rounded-2xl hover:border-slate-200 transition-colors shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Oversized & Heavy Project Cargo</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Low-bed trailers, multi-axle extensions, and specialized pilot vehicle escorts to move out-of-gauge building materials and heavy infrastructure components securely.
              </p>
            </div>
          </div>

          <div className="p-8 bg-white border border-slate-100 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <p className="text-base text-slate-800 font-semibold">
              Ready to schedule a cross-border truck to Riyadh, Muscat, or local UAE hubs?
            </p>
            <a 
              href="#quote" 
              className="px-6 py-3 bg-[#0090FF] hover:bg-[#22C55E] transition-all duration-300 rounded-full text-sm font-semibold tracking-wide text-white hover:shadow-[0_0_20px_rgba(0,144,255,0.3)] shrink-0"
            >
              Book a Truck / Request Freight Rates
            </a>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: WHY CHOOSE US --- */}
      <section id="why-us" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-slate-100 z-20 scroll-mt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,144,255,0.04)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-[#0090FF] text-xs font-bold tracking-widest uppercase">The Advantage</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 text-glow-light">
              The ClearEarth Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-slate-200 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-[#22C55E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Strategic Gateway Infrastructure</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Deep operational presence across Jebel Ali Port, DWC Airport, and key interstate checkpoints connecting the UAE, Saudi Arabia, and Oman.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-slate-200 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-[#22C55E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Proactive Risk Mitigation</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Pre-screening of manifests to prevent structural holdups, eliminating border bottlenecks before your cargo arrives.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-slate-200 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-[#22C55E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Total Border Compliance</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Advanced coordination at international checkpoints ensures your freight avoids administrative holds or unexpected trailer transfers.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-slate-200 transition-colors">
              <CheckCircle2 className="w-6 h-6 text-[#22C55E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">End-to-End Shipment Visibility</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  Access real-time multi-point satellite tracking and automated milestone updates for complete transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: QUOTE FORM --- */}
      <section id="quote" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#F8FAFC] border-t border-slate-100 z-20 scroll-mt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,144,255,0.04)_0%,rgba(248,250,252,0)_70%)] pointer-events-none" />
        <div className="max-w-3xl mx-auto relative">
          <div className="text-center mb-12">
            <span className="text-[#0090FF] text-xs font-bold tracking-widest uppercase">Instant Proposal</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 text-glow-light">
              Request an Instant Freight or Clearance Quote
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-light mt-4">
              Complete the form below, and our local logistics specialists will analyze your route, volume, and compliance requirements to provide a competitive commercial proposal within 24 hours.
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-md">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-[#22C55E] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Quote Request Submitted</h3>
                <p className="text-slate-500 font-light max-w-md mx-auto leading-relaxed">
                  Thank you! Our compliance and dispatch teams are reviewing your information. A detailed pricing proposal will be sent to you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-6 py-2 border border-slate-200 hover:border-slate-300 rounded-full text-xs tracking-wider uppercase text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Company Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Acme Corporation"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0090FF] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Contact Details</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Email and Phone Number"
                      value={formData.contactInfo}
                      onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0090FF] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Primary Service Required</label>
                  <select 
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-[#0090FF] transition-colors"
                  >
                    <option>Freight Forwarding</option>
                    <option>Customs Clearance</option>
                    <option>Land Transport</option>
                    <option>Cold Chain</option>
                    <option>Contract Logistics</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Origin Location</label>
                    <input 
                      type="text" 
                      required
                      placeholder="City or Port"
                      value={formData.origin}
                      onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0090FF] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Destination Location</label>
                    <input 
                      type="text" 
                      required
                      placeholder="City or Port"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0090FF] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Cargo Type & Special Instructions</label>
                  <textarea 
                    rows={4}
                    placeholder="Provide details about volume, weight, dangerous goods classification, or temperature targets..."
                    value={formData.instructions}
                    onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#0090FF] transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-[#0090FF] hover:bg-[#22C55E] transition-all duration-300 rounded-xl text-sm font-semibold tracking-wide text-white hover:shadow-[0_0_25px_rgba(0,144,255,0.4)]"
                >
                  Generate My Customized Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: CONTACT US --- */}
      <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-white border-t border-slate-100 z-20 scroll-mt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(34,197,94,0.03)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-[#22C55E] text-xs font-bold tracking-widest uppercase">Global Headquarters</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-2 text-glow-light">
              Get in Touch with Our Logistics Experts
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-light mt-4 max-w-3xl mx-auto">
              Have an urgent shipment or looking for a long-term logistics partner? Visit our regional headquarters in Dubai or connect instantly with our dispatch and compliance teams via phone, email, or WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Left Column */}
            <div className="space-y-8 p-8 bg-[#F8FAFC] border border-slate-100 rounded-3xl">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0090FF]">Company Legal Entity</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">ClearEarth Logistics LLC</h3>
              </div>
              
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#0090FF] shrink-0 mt-1" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">Corporate Address</span>
                  <p className="text-sm text-slate-600 font-light leading-relaxed mt-1">
                    Office No: 611, Al Asmawi Building, Dubai Investment Park First, Green Community Village, Dubai, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8 p-8 bg-[#F8FAFC] border border-slate-100 rounded-3xl">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0090FF]">Instant Support</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">Contact Details</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#0090FF]" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">Phone Line</span>
                    <a href="tel:+971569908131" className="text-sm text-slate-800 hover:text-[#0090FF] font-medium transition-colors">+971 56990-8131</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#0090FF]" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">Email Support</span>
                    <a href="mailto:info@celogistics.ae" className="text-sm text-slate-800 hover:text-[#0090FF] font-medium transition-colors">info@celogistics.ae</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MessageSquare className="w-5 h-5 text-[#0090FF]" />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">WhatsApp Support</span>
                    <a href="https://wa.me/971569908131" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-800 hover:text-[#0090FF] font-medium transition-colors">Chat Live with Dispatch</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-slate-100 bg-[#F8FAFC] text-center text-xs text-slate-400 z-20 relative">
        <p>&copy; {new Date().getFullYear()} ClearEarth Logistics LLC. All rights reserved.</p>
      </footer>
    </main>
  );
}
