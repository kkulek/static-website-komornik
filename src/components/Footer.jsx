import {
	PhoneIcon,
	AtSymbolIcon,
	DocumentTextIcon,
	MapPinIcon,
	EnvelopeIcon,
	IdentificationIcon,
} from "@heroicons/react/24/solid";

import godlo from "../images/godlo.webp";

const navigation = {
	links: [
		{ name: "O kancelarii", href: "#uslugi" },
		{ name: "Właściwość terytorialna", href: "#wlasciwosc-terytorialna" },
		{ name: "Dokumenty", href: "#dokumenty" },
		{ name: "O mnie", href: "#about" },
		{ name: "Kontakt", href: "./kontakt" },
		{
			name: "Mapka dojazdu",
			href: "https://www.google.com/maps/dir//Strzelecka+7%2F14,+09-402+P%C5%82ock/@52.544003,19.6393472,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x471c714bd8cda5ab:0x9e432ce65a0aafa7!2m2!1d19.711172!2d52.5422997",
		},
	],
};

export default function Footer() {
	return (
		<footer aria-labelledby="footer-heading" id="kontakt">
			<h2 id="footer-heading" className="sr-only">
				Stopka
			</h2>
			<div className="mx-auto max-w-7xl pt-12  px-4 sm:px-6 lg:pt-16 lg:px-8">
				<div className="w-[88px] h-[88px] mb-8">
					<img
						className="h-[88px] w-full object-cover"
						src={godlo}
						alt="Godło Polski"
					/>
				</div>
				<div className="md:grid md:grid-cols-2 lg:grid-cols-12 md:gap-8">
					{/* Podstawowe dane */}
					<div className="space-y-8 lg:col-span-5">
						<div className="space-y-2">
							<p className="text-lg text-gray-800">
								<strong>
									Komornik Sądowy <br />
									przy Sądzie Rejonowym w Płocku
									<br />
									Sylwester Karolak
								</strong>
							</p>

							{/* <p className="text-gray-600">
								<span className="font-bold ">ID komornika:</span> EPU: 3263
							</p> */}
						</div>

						<div className="space-y-2">
							<p className="text-lg text-gray-800">
								Kancelaria Komornicza nr XIII w Płocku
							</p>
							<div>
								<div className="space-y-4">
									<div className="text-gray-600 flex gap-2 items-center">
										<MapPinIcon className="h-4 w-4" />
										<p>ul. Strzelecka 7/14</p>
									</div>
									<div className="text-gray-600 flex gap-2 items-center">
										<EnvelopeIcon className="h-4 w-4" />
										<p>09-402 Płock</p>
									</div>
									<a
										href="tel:+48881158093"
										className="text-gray-600 flex gap-2 items-center"
									>
										<PhoneIcon className="h-4 w-4" />
										<p>881 158 093</p>
									</a>
									<a
										href="mailto:plock.karolak@komornik.pl"
										className="text-gray-600 flex gap-2 items-center"
									>
										<AtSymbolIcon className="h-4 w-4" />
										<p>plock.karolak@komornik.pl</p>
									</a>
									<div className="text-gray-600 pt-4 flex gap-2 items-center">
										<IdentificationIcon className="h-4 w-4" />
										<p>
											<span className="font-bold ">ID komornika EPU:</span> 3263
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="space-y-2">
							<p className="text-lg text-gray-800 font-bold">
								Rachunek bankowy do wpłat
							</p>
							<div>
								<p className="text-gray-600">
									<span className="font-bold">Alior Bank:</span> 40 2490 0005
									0000 4600 9533 5671
								</p>
								<p className="text-gray-600">
									<span className="font-bold">SWIFT:</span> ALBPPLPW
								</p>
							</div>
						</div>
					</div>

					{/* Listy */}
					<div className="md:gap-8 mt-8 md:mt-0 lg:col-span-3">
						<p className="text-lg font-bold text-gray-800">Ważne linki:</p>
						<ul role="list" className="mt-4 space-y-4">
							{navigation.links.map((item, idx) => (
								<li key={item.name}>
									{idx < 5 && (
										<a
											href={item.href}
											className="text-base text-gray-500 hover:text-gray-900"
										>
											{item.name}
										</a>
									)}
									{idx === 5 && (
										<a
											href={item.href}
											target="_blank"
											className="text-base text-gray-500 hover:text-gray-900"
										>
											{item.name}
										</a>
									)}
								</li>
							))}
						</ul>
					</div>

					{/* RODO */}
					<div className="space-y-2 lg:col-span-4 mt-8 md:mt-0">
						<div className="space-y-2">
							<p className="text-lg text-gray-800 font-bold">
								Bezpieczeństwo danych
							</p>
						</div>

						<div className="space-y-4">
							<p className="text-lg text-gray-800">
								<strong>Inspektor Ochrony Danych Osobowych</strong>
								<br />
								Roman Kwieciński
							</p>
							<div className="space-y-4">
								{/* <a href="#" className="text-gray-600 flex gap-2 items-center">
									<PhoneIcon className="h-4 w-4" />
									<p>600 600 600</p>
								</a> */}
								<a
									href="mailto:iod.plock.006@komornik.pl"
									className="text-gray-600 flex gap-2 items-center"
								>
									<AtSymbolIcon className="h-4 w-4" />
									<p>iod.plock.006@komornik.pl</p>
								</a>
								<a
									href="./docs/klauzula-rodo.pdf"
									target="_blank"
									className="text-gray-600 flex gap-2 items-center"
								>
									<DocumentTextIcon className="h-4 w-4" />
									<p>Klauzula RODO</p>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-12 border-t border-gray-200 py-8">
					<p className="text-sm text-gray-800 xl:text-center">
						&copy; 2023 Komornik Sylwester Karolak.{" "}
						<a
							href="http://360stack.pl"
							target="_blank"
							className="text-red-600"
						>
							Projekt i wykonanie <span className="font-bold">360stack.pl</span>
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
