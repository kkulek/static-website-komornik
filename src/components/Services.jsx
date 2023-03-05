import {
	ArrowPathIcon,
	CloudArrowUpIcon,
	CogIcon,
	LockClosedIcon,
	ServerIcon,
	ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import paragraph from "../images/paragraph.svg"

const features = [
	{
		name: "Egzekucja roszczeń pieniężnych",
		description:
			"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
		icon: CloudArrowUpIcon,
	},
	{
		name: "Egzekucja roszczeń niepieniężnych",
		description:
			"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
		icon: LockClosedIcon,
	},
	{
		name: "Zabezpieczenie roszczeń",
		description:
			"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
		icon: ArrowPathIcon,
	},
	{
		name: "Spis inwentarza",
		description:
			"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
		icon: ShieldCheckIcon,
	},
	{
		name: "Sporządzanie protokołu stanu faktycznego",
		description:
			"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
		icon: CogIcon,
	},
	{
		name: "Doręczanie korespondencji sądowej",
		description:
			"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
		icon: ServerIcon,
	},
	{
		name: "Sprawowanie urzędowego nadzoru nad dobrowolnymi publicznymi licytacjami",
		description:
			"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
		icon: CogIcon,
	},
	{
		name: "Wykonywanie zadań określonych w innych ustawach ",
		description:
			"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
		icon: ServerIcon,
	},
];

export default function Example() {
	return (
		<div className="relative bg-white py-24 sm:py-32 lg:py-40" id="uslugi">
			<div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
				<h2 className="text-lg font-semibold text-red-600 italic">
					Executio iuris non habet iniuriam
				</h2>
				<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Egzekwowanie prawa nie jest bezprawiem
				</p>
				<p className="mx-auto mt-5 text-xl text-gray-500">
					Komornik jest funkcjonariuszem publicznym działającym przy Sądzie
					Rejonowym. Komornik jest organem władzy publicznej w zakresie
					wykonywania czynności w postępowaniu egzekucyjnym i zabezpieczającym.
					Stosownie do treści art. 3 i 4 Ustawy z dnia 22 marca 2018 r o
					komornikach sądowych (Dz. U. 2018 poz. 771) komornikowi powierza się
					następujące zadania:
				</p>
				<div className="mt-20">
					<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.name} className="pt-6">
								<div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
									<div className="-mt-6">
										<div>
											<span className="inline-flex items-center justify-center rounded-xl bg-red-500 p-3 shadow-lg">
												<img src={paragraph} alt="" className="h-8 w-8" />
											</span>
										</div>
										<h3 className="mt-8 text-xl font-semibold leading-8 tracking-tight text-gray-900">
											{feature.name}
										</h3>
										{/* <p className="mt-5 text-base leading-7 text-gray-600">
											{feature.description}
										</p> */}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
