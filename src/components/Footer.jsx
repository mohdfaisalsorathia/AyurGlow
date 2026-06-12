export default function Footer() {
  return (
    <footer className="bg-charcoal py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
        {/* Brand */}
        <div className="flex items-baseline gap-2">
          <span className="font-display text-white font-semibold text-base sm:text-lg">Ayurglow</span>
          <span className="text-white/40 text-[10px] sm:text-xs tracking-wider uppercase">Skin &amp; Hair Clinic</span>
        </div>

        {/* Copyright */}
        <p className="text-white/40 text-[10px] sm:text-xs text-center sm:text-right">
          &copy; {new Date().getFullYear()} Ayurglow Skin &amp; Hair Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
