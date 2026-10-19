import { profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-4 py-8 text-center sm:px-6">
        <p className="text-sm font-medium text-heading">
          Designed with purpose. Built for better business decisions.
        </p>
        <p className="text-xs text-muted">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
