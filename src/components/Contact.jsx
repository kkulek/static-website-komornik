import React from "react";
import NavContact from "./NavContact";
import ContactData from "./ContactData";
import Header from "./Header";
import Faq from "./Faq"

function Contact() {
	return (
		<>
			<div className="relative overflow-hidden bg-white">
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-12 lg:w-full lg:max-w-2xl lg:pb-12 xl:pb-12">
						<svg
							className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
							fill="currentColor"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<polygon points="50,0 100,0 50,100 0,100" />
						</svg>
						<NavContact />
					</div>
					<Header />
					<ContactData />
					<Faq />
				</div>
			</div>
		</>
	);
}

export default Contact;
