"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/pages/service" },
  { name: "Contact", href: "#" },
  { name: "About", href: "/pages/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-white mb-15">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            aria-label="Global"
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-white shadow lg:px-8 rounded-b-xs"
          >
            <div className="flex lg:flex-1">
              <Link href={"/"} className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <div className="w-auto h-8 font-semibold text-gray-900 text-2xl/6">
                  HMX<span className="text-[var(--main-color)]">HUB</span>
                </div>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-semibold text-gray-900 text-sm/6"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="items-center hidden gap-4 lg:flex lg:flex-1 lg:justify-end">
              {/* Sign In Button */}
              <a
                href="/pages/selection?mode=signin"
                className="px-5 py-3 text-sm font-semibold text-gray-900 transition rounded-xs hover:text-blue-600"
              >
                Sign In
              </a>

              {/* Sign Up Button */}
              <a
                href="/pages/selection?mode=signup"
                className="px-5 py-3 text-sm text-white font-semibold  bg-[var(--main-color)] hover:bg-blue-700 transition rounded-xs shadow"
              >
                Sign Up
              </a>
            </div>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <div className="w-auto h-8 font-semibold text-gray-900 text-2xl/6">
                    HMX<span className="text-[var(--main-color)]">HUB</span>
                  </div>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="flow-root mt-6">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="py-6 space-y-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href={"/pages/selection?mode=signin"}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 "
                    >
                      SignIn
                    </a>
                  </div>
                  <div className="">
                    <a
                      href={"/pages/selection?mode=signup"}
                      className="-mx-3 block rounded-xs px-3 py-2.5 text-base/7 font-semibold text-white bg-[var(--main-color)] hover:bg-blue-700 transition shadow"
                    >
                      SignUp
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      </div>
    </>
  );
}
