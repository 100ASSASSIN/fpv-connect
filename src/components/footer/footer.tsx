"use client";

export default function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900"
        >
      <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto m-2"
              />
          FPV
        </a>

        <p className="my-6 text-gray-500">
          Open-source library of over 400+ web components and interactive
          elements built for better web.
        </p>

        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900">
          {[
            "About",
            "Premium",
            "Campaigns",
            "Blog",
            "Affiliate Program",
            "FAQs",
            "Contact",
          ].map((item, index) => (
            <li key={index}>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <span className="text-sm text-gray-500 sm:text-center">
          © 2021-2022{" "}
          <a href="#" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
