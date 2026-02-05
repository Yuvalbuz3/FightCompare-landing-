import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <main className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 py-12 text-center lg:py-16">
        {/* Hero */}
        <section className="space-y-6">
          <div className="flex justify-center">
            <Image
              src="/fighter.png"
              alt="MMA fighters training"
              width={480}
              height={260}
              className="h-auto max-w-full rounded-3xl border border-zinc-800 bg-zinc-900 shadow-[0_0_30px_rgba(0,0,0,0.8)]"
              priority
            />
          </div>
          <p className="inline-flex items-center gap-2 rounded-full border border-red-600/60 bg-red-950/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-red-300">
            FightCompare · Retailer Program
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Turn combat-sport shoppers
            <span className="block text-red-400">into high-intent buyers.</span>
          </h1>
          <p className="mx-auto max-w-xl text-balance text-sm leading-relaxed text-zinc-300 sm:text-base">
            FightCompare is a comparison engine for MMA, boxing and Muay Thai equipment.
            We send ready-to-buy traffic directly to your product pages using
            data-driven rankings, side-by-side comparisons and affiliate links.
          </p>
          <div className="flex flex-col items-center justify-center gap-2">
            <a
              href="#partner"
              className="inline-flex items-center justify-center rounded-full bg-red-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-50 shadow-lg shadow-red-500/40 transition hover:bg-red-400"
            >
              Become a launch partner
            </a>
            <p className="max-w-md text-xs text-zinc-500">
              FightCompare is currently in active development; we&apos;re onboarding a small group of
              early retail partners.
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-4 text-xs text-zinc-200 sm:grid-cols-3 sm:text-sm">
            <div className="text-center">
              <p className="font-semibold text-zinc-100">High-intent traffic</p>
              <p>Buyers comparing gloves, shin guards, shorts and more right before purchase.</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-zinc-100">Performance tracking</p>
              <p>Transparent reporting on clicks, CTR by category and top-performing SKUs.</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-zinc-100">Simple integration</p>
              <p>We work with your existing affiliate platform or a lightweight direct setup.</p>
            </div>
          </div>
        </section>
      </main>

      {/* How it works */}
      <section
        id="how-it-works"
        className="border-t border-zinc-900 bg-zinc-950/80 px-6 py-10"
      >
        <div className="mx-auto max-w-5xl space-y-8 text-center">
          <div className="mx-auto max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              How FightCompare works for retailers
            </h2>
            <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
              We help combat-sport athletes choose the right gear, then send them directly to your
              store to complete the purchase through affiliate links.
            </p>
          </div>
          <div className="grid gap-6 text-left md:grid-cols-3">
            <div className="space-y-2 rounded-2xl border border-zinc-900 bg-zinc-900/60 p-4 text-left">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-400">
                1 · Product data
              </p>
              <p className="text-sm font-semibold text-zinc-50">You share your catalog or feed</p>
              <p className="text-xs text-zinc-300">
                We ingest product feeds or curated lists of your key equipment lines: gloves,
                headgear, shin guards, pads, apparel and more.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl border border-zinc-900 bg-zinc-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-400">
                2 · Comparison & content
              </p>
              <p className="text-sm font-semibold text-zinc-50">
                We build buying guides and rankings
              </p>
              <p className="text-xs text-zinc-300">
                Our engine structures specs, pricing and use-cases into transparent comparisons and
                educational content that builds trust.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl border border-zinc-900 bg-zinc-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-400">
                3 · Qualified traffic
              </p>
              <p className="text-sm font-semibold text-zinc-50">
                We send buyers to your store
              </p>
              <p className="text-xs text-zinc-300">
                Once a user has chosen a product, we link straight to your product page with
                affiliate tracking and clear calls-to-action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner section */}
      <section
        id="partner"
        className="border-t border-zinc-900 bg-zinc-950 px-6 py-16"
      >
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Become a FightCompare retailer partner
            </h2>
            <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
              We&apos;re onboarding a small group of launch partners across MMA, boxing and Muay
              Thai categories. If you run an online store or brand and want incremental, measurable
              sales, we&apos;d love to talk.
            </p>
          </div>
          <div className="grid gap-6 text-left md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-900 bg-zinc-900/60 p-4 text-sm">
              <p className="font-semibold text-zinc-50">Category visibility</p>
              <p className="mt-1 text-xs text-zinc-300">
                Highlight your MMA, boxing and Muay Thai equipment in the exact comparisons athletes
                use before they buy.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-900 bg-zinc-900/60 p-4 text-sm">
              <p className="font-semibold text-zinc-50">Clear reporting</p>
              <p className="mt-1 text-xs text-zinc-300">
                Monthly exports of clicks, top categories and landing pages so you can see what&apos;s
                working.
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-2xl border border-red-500/40 bg-red-950/40 px-4 py-4 text-sm sm:flex-row sm:px-6">
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-semibold text-red-200">Share your catalog & affiliate details</p>
              <p className="text-xs text-red-100/80">
                Send us your store URL, key categories, and current affiliate setup. We&apos;ll
                respond with a tailored proposal.
              </p>
            </div>
            <a
              href="mailto:partners@fightcompare.com?subject=Retailer%20partnership&body=Hi%20FightCompare%20team%2C%0D%0A%0D%0AWe%27d%20like%20to%20discuss%20a%20retailer%20partnership.%20Here%27s%20some%20info%20about%20our%20store%3A%0D%0A-%20Store%20name%3A%0D%0A-%20Website%3A%0D%0A-%20Key%20categories%20(MMA%2C%20boxing%2C%20Muay%20Thai%2C%20etc.)%3A%0D%0A-%20Affiliate%20platform%20(or%20direct)%3A%0D%0A-%20Markets%20you%20ship%20to%3A%0D%0A%0D%0ABest%2C%0D%0A"
              className="inline-flex items-center justify-center rounded-full bg-red-500 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-50 shadow-lg shadow-red-500/40 transition hover:bg-red-400"
            >
              Email partners@fightcompare.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 px-6 py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-[11px] text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} FightCompare. All rights reserved.</p>
          <p>Focused on MMA, boxing and Muay Thai equipment comparison with affiliate partners.</p>
        </div>
      </footer>
    </div>
  );
}
