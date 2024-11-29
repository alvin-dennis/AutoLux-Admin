import Link from "next/link";

export default function Footer() {
  return <>
    <footer className="bg-gray-50 border-t border-zinc-200">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-black-600 sm:justify-start">
            <Link className=" text-black-600 flex items-center gap-2 font-bold" href="/">
              <span className="sr-only">Home</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 2a2 2 0 100 4 2 2 0 000-4zm10 13a4 4 0 11-8 0 4 4 0 018 0zm-4 4a4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4zm-8-4a4 4 0 11-8 0 4 4 0 018 0zm-4 4a4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4zm3-7h4l3-3h4m-7 4l-4-4" />
                </svg>
              AutoLux - Admin
            </Link>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </>
}