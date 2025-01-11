import React from "react"

const Footer: React.FC = () => {

  return (
    <footer className="mx-auto w-full max-w-5xl px-4 lg:px-0 pb-4 server-footer">
      <section className="flex flex-col">
        <section className="mt-1 flex items-center sm:flex-row flex-col justify-between gap-2 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50 server-footer-name">
            <div className="flex items-center gap-1">
              {`@2024-${new Date().getFullYear()} qqbaby.xyz`}
            </div>
        </section>
      </section>
    </footer>
  )
}

export default Footer
