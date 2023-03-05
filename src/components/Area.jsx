import { CameraIcon } from "@heroicons/react/20/solid";

export default function Example() {
	return (
		<div className="overflow-hidden bg-white" id="wlasciwosc-terytorialna">
			<div className="relative mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
				<div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-50 lg:block" />
				<div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
					<div>
						<h2 className="text-lg font-semibold text-red-600">
							Obszar wsparcia
						</h2>
						<h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
							Właściwość terytorialna
						</h3>
					</div>
				</div>
				<div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-8">
					<div className="relative lg:col-start-3 lg:row-start-1">
						<svg
							className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
							width={404}
							height={384}
							fill="none"
							viewBox="0 0 404 384"
							aria-hidden="true"
						>
							<defs>
								<pattern
									id="de316486-4a29-4312-bdfc-fbce2132a2c1"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse"
								>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
							/>
						</svg>
						<div className="relative mx-auto max-w-prose text-base lg:max-w-none">
							<figure>
								<div className="aspect-w-12 aspect-h-7 lg:aspect-none">
									<img
										className="rounded-lg object-cover object-center shadow-lg"
										src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
										alt="Whitney leaning against a railing on a downtown street"
										width={1184}
										height={1376}
									/>
								</div>
								<figcaption className="mt-3 flex text-sm text-gray-500">
									<CameraIcon
										className="h-5 w-5 flex-none text-gray-400"
										aria-hidden="true"
									/>
									<span className="ml-2">Photograph by Marcus O’Leary</span>
								</figcaption>
							</figure>
						</div>
					</div>
					<div className="mt-8 lg:mt-0 lg:col-span-2">
						<div className="mx-auto max-w-prose text-base lg:max-w-none">
							<p className="text-lg text-gray-500">
								Komornik Sądowy przy Sądzie Rejonowym w Płocku Sylwester Karolak
								działa na obszarze swojego rewiru, którym jest obszar
								właściwości Sądu Rejonowego w Płocku i obejmuje teren{" "}
								<strong>
									gminy miasta Płock oraz gmin: Bielsk, Bodzanów, Brudzeń Duży,
									Bulkowo, Mała Wieś, Radzanowo, Słupno, Stara Biała, Staroźreby
									i Wyszogród.
								</strong>
							</p>
						</div>
						<div className="prose prose-red mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
							<p>
								Ponadto stosownie do treści art. 10 Ustawy z dnia 22 marca 2018
								r. o komornikach sądowych (Dz. U. 2018 poz. 771), w sprawach, o
								których mowa w art. 3 ust. 3 pkt 1–2a, wierzyciel ma prawo
								wyboru komornika na obszarze właściwości sądu apelacyjnego, na
								którym znajduje się siedziba kancelarii komornika właściwego
								zgodnie z przepisami ustawy z dnia 17 listopada 1964 r. – Kodeks
								postępowania cywilnego, z wyjątkiem spraw:
							</p>
							<ol role="list">
								<li>o egzekucję z nieruchomości; </li>
								<li>o wydanie nieruchomości;</li>
								<li>o wprowadzenie w posiadanie nieruchomości;</li>
								<li>
									o opróżnienie pomieszczeń, w tym lokali mieszkalnych, z osób
									lub rzeczy;
								</li>
								<li>
									w których przepisy o egzekucji z nieruchomości stosuje się
									odpowiednio
								</li>
							</ol>
							<p>
								Wierzyciel ma prawo wyboru komornika sądowego Sylwestra Karolaka
								do prowadzenia postępowań egzekucyjnych na obszarze właściwości
								Sądu Apelacyjnego w Łodzi obejmującego swoim obszarem
								właściwości sądy okręgowe w:
							</p>
							<p className="italic">
								<span className="font-bold">Płocku</span> - obejmujący obszar
								właściwości{" "}
								<span className="font-bold">
									Sądów Rejonowych w: Ciechanowie, Gostyninie, Mławie, Płocku,
									Płońsku, Sierpcu, Sochaczewie i Żyrardowie
								</span>
							</p>
							<p className="italic">
								<span className="font-bold">Kaliszu</span> - obejmujący obszar
								właściwości{" "}
								<span className="font-bold">
									Sądów Rejonowych w: Jarocinie, Kaliszu, Kępnie, Krotoszynie,
									Ostrowie Wielkopolskim, Ostrzeszowie i Pleszewie
								</span>
							</p>
							<p className="italic">
								<span className="font-bold">Łodzi</span> - obejmujący obszar
								właściwości{" "}
								<span className="font-bold">
									Sądów Rejonowych: w Brzezinach, Kutnie, Łęczycy, dla Łodzi-
									Śródmieścia w Łodzi, dla Łodzi-Widzewa w Łodzi, w Łowiczu,
									Pabianicach, Rawie Mazowieckiej, Skierniewicach i Zgierzu
								</span>
							</p>
							<p className="italic">
								<span className="font-bold">Piotrkowie Trybunalskim</span> -
								obejmujący obszar właściwości{" "}
								<span className="font-bold">
									Sądów Rejonowych w: Bełchatowie, Opocznie, Piotrkowie
									Trybunalskim, Radomsku i Tomaszowie Mazowieckim
								</span>
							</p>
							<p className="italic">
								<span className="font-bold">Sieradzu</span> - obejmujący obszar
								właściwości{" "}
								<span className="font-bold">
									Sądów Rejonowych w: Łasku, Sieradzu, Wieluniu i Zduńskiej Woli
								</span>
							</p>
							<div className="prose prose-red mx-auto mt-5 text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
								<p className="font-bold">
									Wierzyciel, dokonując wyboru komornika, składa wraz z
									wnioskiem o wszczęcie egzekucji pisemne oświadczenie, że
									korzysta z prawa wyboru komornika (art. 10 ust. 3 Ustawy z
									dnia 22 marca 2018 r. o komornikach sądowych)
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
