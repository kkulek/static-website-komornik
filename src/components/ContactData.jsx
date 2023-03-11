import {
	PhoneIcon,
	MapIcon,
	AtSymbolIcon,
	MapPinIcon,
	EnvelopeIcon,
	IdentificationIcon,
} from "@heroicons/react/24/solid";

const kancelariaGodziny = [
	{ day: "poniedziałek", open: "8:30 - 15:00" },
	{ day: "wtorek", open: "8:30 - 15:00" },
	{ day: "środa", open: "8:30 - 15:00" },
	{ day: "czwartek", open: "8:30 - 15:00" },
	{ day: "piątek", open: "8:30 - 15:00" },
];

export default function ContactData() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
				<div className="divide-y-2 divide-gray-200">
					<div className="lg:grid lg:grid-cols-3 lg:gap-8">
						<h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
							Kancelaria
						</h2>
						<div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
							<div>
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Adres:
								</h3>
								<dl className="mt-2 text-base text-gray-500">
									<div>
										<dt className="sr-only">Ulica i numer</dt>
										<dd className="text-gray-600 flex gap-2 items-center">
											<MapPinIcon className="h-4 w-4" />
											<p>ul. Strzelecka 7/14</p>
										</dd>
									</div>
									<div className="mt-1">
										<dt className="sr-only">Kod pocztowy</dt>
										<dd className="text-gray-600 flex gap-2 items-center">
											<EnvelopeIcon className="h-4 w-4" />
											<p>09-402 Płock</p>
										</dd>
									</div>
									<div className="mt-1">
										<dt className="sr-only">Mapka dojazdu</dt>
										<dd>
											<a href="https://www.google.com/maps/dir//Strzelecka+7%2F14,+09-402+P%C5%82ock/@52.544003,19.6393472,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x471c714bd8cda5ab:0x9e432ce65a0aafa7!2m2!1d19.711172!2d52.5422997" target="_blank">
												<div className="text-gray-600 flex gap-2 items-center">
													<MapIcon className="h-4 w-4" />
													<p>Mapka dojazdu</p>
												</div>
											</a>
										</dd>
									</div>
								</dl>
							</div>
							<div>
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Godziny otwarcia:
								</h3>
								<ul className="mt-2 text-base text-gray-500">
									{kancelariaGodziny.map((item, idx) => (
										<li key={`t-${item.day}-${idx}`}>
											<div className="flex gap-2 sm:gap-0 sm:grid sm:grid-cols-5">
												<p className="sm:col-span-2">{item.day} </p>
												<p className="sm:col-span-3">{item.open}</p>
											</div>
										</li>
									))}
								</ul>
								<div className="mt-6">
									<h3 className="text-lg font-medium leading-6 text-gray-900">
										Przyjęcia interesantów przez komornika
									</h3>
									<p className=" text-gray-500">Każdy wtorek: 10:00 - 14:00</p>
								</div>
							</div>
							<div>
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Kontakt:
								</h3>
								<dl className="mt-2 text-base text-gray-500">
									<div>
										<dt className="sr-only">numer telefonu</dt>
										<dd>
											<a href="tel:+48881158093">
												<div className="text-gray-600 flex gap-2 items-center">
													<PhoneIcon className="h-4 w-4" />
													<p>881 158 093</p>
												</div>
											</a>
										</dd>
										<dt className="sr-only">email</dt>
										<dd className="text-gray-600 flex gap-2 items-center">
											<a href="mailto:plock.karolak@komornik.pl">
												<div className="text-gray-600 flex gap-2 items-center">
													<AtSymbolIcon className="h-4 w-4" />
													<p>plock.karolak@komornik.pl</p>
												</div>
											</a>
										</dd>
									</div>
								</dl>
							</div>

							<div>
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Rachunek bankowy:
								</h3>
								<div className="mt-2 text-base text-gray-500">
									<p>
										<span className="font-bold">Alior Bank:</span> 40 2490 0005
										0000 4600 9533 5671
									</p>
									<p className="mt-1">
										<span className="font-bold">SWIFT:</span> ALBPPLPW
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
						<div>
							<h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
								ID komornika EPU
							</h2>
							<div className="text-gray-600 flex gap-2 items-center">
								<IdentificationIcon className="h-9 w-9" />
								<p className="font-bold text-3xl">3263</p>
							</div>
						</div>

						<div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
							<div>
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Adres skrzynek ePUAP:
								</h3>
								<div className="mt-2 text-base text-gray-500">
									<p>domyślna: /KS_Sylwester_Karolak/</p>
									<p className="mt-1">Ezbiegi: /KS_Sylwester_Karolak/ezbiegi</p>
								</div>
							</div>
							<div>
								<h4 className="text-lg font-medium leading-6 text-gray-900">
									Inspektor Ochrony Danych Osobowych:
								</h4>
								<dl className="mt-2 text-base text-gray-500">
									<div>
										<dd className="text-gray-600">Roman Kwieciński</dd>
										<dt className="sr-only">numer telefonu</dt>
										<dd>
											<a href="tel:+48222222222">
												<div className="text-gray-600 flex gap-2 items-center">
													<PhoneIcon className="h-4 w-4" />
													<p>uzupełniamy numer?</p>
												</div>
											</a>
										</dd>
										<dt className="sr-only">email</dt>
										<dd>
											<a href="mailto:iod.plock.006@komornik.pl">
												<div className="text-gray-600 flex gap-2 items-center">
													<AtSymbolIcon className="h-4 w-4" />
													<p>iod.plock.006@komornik.pl</p>
												</div>
											</a>
										</dd>
									</div>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
