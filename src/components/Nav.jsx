import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
	{ name: "O kancelarii", href: "#uslugi" },
	{ name: "Właściwość terytorialna", href: "#wlasciwosc-terytorialna" },
	{ name: "Dokumenty", href: "#dokumenty" },
	{ name: "O mnie", href: "#about" },
	{ name: "Kontakt", href: "./kontakt" },
];

import React from "react";

function Nav() {
	return (
		<>
			<Popover>
				<div className="relative px-4 pt-6 sm:px-6 lg:px-8">
					<nav
						className="relative flex items-center justify-between sm:h-10 lg:justify-start"
						aria-label="Global"
					>
						<div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
							<div className="flex w-full items-center justify-between md:w-auto">
								{/* <a href="#">
											<span className="sr-only">Your Company</span>
											<img
												alt="Your Company"
												className="h-8 w-auto sm:h-10"
												src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600"
											/>
										</a> */}
								<div className="-mr-2 flex items-center md:hidden">
									<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
										<span className="sr-only">Open main menu</span>
										<Bars3Icon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
						</div>
						<div className="hidden  md:block md:space-x-8 md:pr-4">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="font-medium text-gray-500 hover:text-gray-900"
								>
									{item.name}
								</a>
							))}
							{/* <a
										href="#"
										className="font-medium text-red-600 hover:text-red-500"
									>
										Log in
									</a> */}
						</div>
					</nav>
				</div>

				<Transition
					as={Fragment}
					enter="duration-150 ease-out"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="duration-100 ease-in"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Popover.Panel
						focus
						className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
					>
						<div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
							<div className="flex items-center justify-between px-5 pt-4">
								{/* <div>
											<img
												className="h-8 w-auto"
												src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600"
												alt=""
											/>
										</div> */}
								<div className="-mr-2">
									<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
										<span className="sr-only">Close main menu</span>
										<XMarkIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<div className="space-y-1 px-2 pt-2 pb-3">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</Popover.Panel>
				</Transition>
			</Popover>
		</>
	);
}

export default Nav;
