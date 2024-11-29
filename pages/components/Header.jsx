import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import { useState } from "react";


export default function Header() {
  const { data: session } = useSession()
  const router = useRouter();
  const { pathname } = router;
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const active = 'text-black-600 transition hover:text-black-500 p-3 rounded-md bg-gray-200'
  const inActive = 'text-gray-500 transition hover:text-green-500 p-3'

  if (session) {
    return <>
      <header className="bg-white z-30 top-0 sticky border-b border-zinc-200 mx-auto">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className=" text-black-600 flex items-center gap-2 font-bold" href="/">
                <span className="sr-only">Home</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 2a2 2 0 100 4 2 2 0 000-4zm10 13a4 4 0 11-8 0 4 4 0 018 0zm-4 4a4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4zm-8-4a4 4 0 11-8 0 4 4 0 018 0zm-4 4a4 4 0 01-4-4 4 4 0 014-4 4 4 0 014 4 4 4 0 01-4 4zm3-7h4l3-3h4m-7 4l-4-4" />
                </svg>
                AutoLux - Admin
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-8">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-3 text-lg">
                  <li>
                    <Link
                      className={pathname === '/' ? active : inActive}
                      href="/"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={pathname === '/products' ? active : inActive}
                      href="/products"
                    >
                      Products
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={pathname === '/categories' ? active : inActive}
                      href="/categories"
                    >
                      Categories
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={pathname === '/orders' ? active : inActive}
                      href="/orders"
                    >
                      Orders
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={pathname === '/settings' ? active : inActive}
                      href="/settings"
                    >
                      Settings
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <div className="w-10 h-10">
                    <Image class="h-full w-full rounded-full object-contain object-center" src={session.user.image} alt={session.user.email} width={34} height={34} />
                  </div>
                </div>

                {/* Mobile navigation button */}
                <div className="block md:hidden">
                  <button
                    onClick={toggleMobileNav}
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  >
                    {isMobileNavOpen ? (
                      // X icon for close
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      // Menu icon for open
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {/* Mobile navigation links */}
                {isMobileNavOpen && (
                  <div className="md:hidden absolute top-16 right-0 bg-white border border-zinc-200 rounded shadow-lg p-6 text-lg">
                    <ul className="flex flex-col items-start gap-4">
                      <li>
                        <Link
                          onClick={toggleMobileNav}
                          className={pathname === '/' ? active : inActive}
                          href="/"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={toggleMobileNav}
                          className={pathname === '/products' ? active : inActive}
                          href="/products"
                        >
                          Products
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={toggleMobileNav}
                          className={pathname === '/categories' ? active : inActive}
                          href="/categories"
                        >
                          Categories
                        </Link>
                      </li>

                      <li>
                        <Link
                          onClick={toggleMobileNav}
                          className={pathname === '/orders' ? active : inActive}
                          href="/orders"
                        >
                          Orders
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={toggleMobileNav}
                          className={pathname === '/settings' ? active : inActive}
                          href="/settings"
                        >
                          Settings
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  }
}