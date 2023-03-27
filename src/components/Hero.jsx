import temida from "../images/temida.webp";
import Nav from "./Nav";
import godlo from '../images/godlo.webp';

export default function Example() {
	return (
		<div className="relative overflow-hidden bg-white">
			<div className="mx-auto max-w-7xl">
				<div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
					<svg
						className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
						fill="currentColor"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<polygon points="50,0 100,0 50,100 0,100" />
					</svg>

					<Nav />

					<section className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<div className="sm:text-center lg:text-left">
							<div className="flex gap-2 items-center sm:justify-center lg:justify-start">
								<div className="w-[56px] h-[56px]">
									<img
										className="h-[56px] w-full object-cover"
										src={godlo}
										alt="Godło Polski"
									/>
								</div>

								<p className="text-3xl sm:text-4xl md:text-5xl text-gray-900">
									<strong>Sylwester Karolak</strong>
								</p>
							</div>

							<div className="flex flex-col">
								<h1 className="text-2xl mt-4 tracking-tight text-gray-900 sm:text-4xl">
									<strong>Komornik Sądowy</strong> <br />
									<span className="font-normal text-2xl sm:text-3xl md:text-2xl xl:inline">
										przy Sądzie Rejonowym w Płocku
									</span>
								</h1>
							</div>

							<p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 max-w-prose">
								Informacje zawarte na stronie internetowej stanowią funkcję
								informacyjną i nie są reklamą działalności Komornika Sądowego
								przy Sądzie Rejonowym w Płocku Sylwestra Karolaka
							</p>
							<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
								<div className="rounded-md shadow">
									<a
										href="#uslugi"
										className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 md:py-4 md:px-10 md:text-lg"
									>
										O kancelarii
									</a>
								</div>
								<div className="mt-3 sm:mt-0 sm:ml-3">
									<a
										href="tel:+48881158093"
										className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-100 px-8 py-3 text-base font-medium text-red-700 hover:bg-red-200 md:py-4 md:px-10 md:text-lg"
									>
										Zadzwoń: 881 158 093
									</a>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<img
					className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
					src={temida}
					alt="Symbol sprawiedliwości, prawa i wiecznego porządku - Temida"
				/>
			</div>
		</div>
	);
}
