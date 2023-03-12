import { CheckIcon } from "@heroicons/react/24/outline";
import {DocumentIcon} from "@heroicons/react/24/outline";
import {ArrowDownTrayIcon} from "@heroicons/react/24/outline";

const features = [
	{
		name: "Wniosek o doręczenie korespondencji",
		doc: "wniosek-doręczenie-korespondencji.pdf",
		// description:"You can manage phone, email and chat conversations all from a single mailbox.",
	},
	{
		name: "Wniosek o wszczęcie egzekucji",
		doc: "wniosek-o-wszczęcie-egzekucji.pdf",
		// description:"You can manage phone, email and chat conversations all from a single mailbox.",
	},
	{
		name: "Wniosek o wszczęcie egzekucji świadczeń alimentacyjnych",
		doc: "wniosek-alimenty.pdf",
		// description:"You can manage phone, email and chat conversations all from a single mailbox.",
	},

	{
		name: "Wniosek w sprawie",
		doc: "wniosek-w-sprawie.pdf",
		// description:"You can manage phone, email and chat conversations all from a single mailbox.",
	},

	{
		name: "Skarga na czynności komornika",
		doc: "skarga-na-czynnosci-komornika.pdf",
		// description:"Find what you need with advanced filters, bulk actions, and quick views.",
	},
];

export default function DocumentsDownload() {
	return (
		<div className="bg-white" id="dokumenty">
			<div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:px-8 lg:py-40">
				<div>
					<p className="text-lg font-semibold leading-8 tracking-tight text-red-600">
						Kliknij, aby pobrać
					</p>
					<h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
						Ważne dokumenty
					</h2>
					{/* <p className="mt-6 text-base leading-7 text-gray-600">
						
					</p> */}
				</div>
				<div className="mt-20 lg:col-span-2 lg:mt-0">
					<dl className="grid grid-cols-1 gap-12 md:grid-flow-col md:grid-cols-2 md:grid-rows-3">
						{features.map((feature, index) => (
							<a
								href={`./docs/${feature.doc}`}
								target="_blank"
								className={index === 2 ? "md:col-span-3" : "relative"}
							>
								<div key={feature.name} className="relative">
									<dt>
										<ArrowDownTrayIcon
											className="absolute mt-1 h-6 w-6 text-red-600"
											aria-hidden="true"
										/>
										<p className="ml-10 text-lg font-semibold leading-8 text-gray-900">
											{feature.name}
										</p>
									</dt>
								</div>
							</a>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
