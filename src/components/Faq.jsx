import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
	{
		question: "Co musi zrobić wierzyciel aby wszcząć postepowanie egzekucyjne?",
		answer:
			"W celu wszczęcia postępowania egzekucyjnego wierzyciel zobowiązany jest złożyć do komornika wniosek o wszczęcie egzekucji ze wskazaniem swoich podstawowych danych identyfikacyjnych oraz danych identyfikacyjnych dłużnika. We wniosku egzekucyjnym należy także określić wartość roszczenia podlegającego egzekucji. Ponadto wierzyciel może wskazać sposób albo sposoby prowadzenia egzekucji oraz ewentualnie wskazać znane mu składniki majątku dłużnika.  Do wniosku wierzyciel zobowiązany jest także załączyć tytuł wykonawczy w oryginale.",
	},
	{
		question:
			"Czy komornik może zająć wszystkie środki znajdujące się na rachunku oszczędnościowo-rozliczeniowym dłużnika?",
		answer:
			"Co do zasady nie. Stosownie bowiem do treści art. 54.1 Ustawy z dnia 29 sierpnia 1997 r. - Prawo bankowe Dz.U 1997 nr 140 poz. 939 stanowi, że środki pieniężne znajdujące się na rachunkach oszczędnościowych, rachunkach oszczędnościowo-rozliczeniowych oraz na rachunkach terminowych lokat oszczędnościowych jednej osoby, niezależnie od liczby zawartych umów, są wolne od zajęcia na podstawie sądowego lub administracyjnego tytułu wykonawczego, w każdym miesiącu kalendarzowym, w którym obowiązuje zajęcie, do wysokości 75% minimalnego wynagrodzenia za pracę, ustalanego na podstawie ustawy z dnia 10 października 2002 r. o minimalnym wynagrodzeniu za pracę (Dz. U. z 2020 r. poz. 2207), przysługującego pracownikowi zatrudnionemu w pełnym miesięcznym wymiarze czasu pracy.",

		answer2:
			"Powyższe ograniczenie nie dotyczy egzekucji roszczeń alimentacyjnych. Wierzytelności z rachunku bankowego podlegają egzekucji na zaspokojenie alimentów w pełnej wysokości (art. 1083. § 2 kodeksu postępowania cywilnego)",
	},
	{
		question:
			"Czy komornik może zmniejszyć dochodzone roszczenie na wniosek dłużnika?",
		answer:
			"Nie. Komornik prowadzi postępowanie egzekucyjne zgodnie z wnioskiem wierzyciela oraz w granicach tytułu wykonawczego. Gestorem postępowania jest wierzyciel i to on decyduje o zakresie egzekwowanego roszczenia. Komornik nie ma zatem uprawnienia do samodzielnego zmniejszania dochodzonego roszczenia, co dotyczy zarówno należności głównej, odsetek oraz innych należności ubocznych.",
	},
	{
		question: "Czy dłużnik może dobrowolnie spłacić zadłużenie u komornika?",
		answer:
			"Tak, dłużnik może dobrowolnie spłacić zadłużenie u komornika dokonując wpłaty na rachunekbankowy kancelarii bądź dokonując wpłaty bezpośrednio w kancelarii komornika. W celu spłatycałości zadłużenia zaleca się kontakt z kancelarią komornika celem uzyskania informacji przezdłużnika, na temat aktualnego stanu zadłużenia.",
	},
	// {
	// 	question:
	// 		"",
	// 	answer:
	// 		"",
	// },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Example() {
	return (
		<div className="bg-gray-50">
			<div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
					<h2 className="lg:text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Najczęściej zadawane pytania komornikowi
					</h2>
					<dl className="mt-6 space-y-6 divide-y divide-gray-200">
						{faqs.map((faq) => (
							<Disclosure as="div" key={faq.question} className="pt-6">
								{({ open }) => (
									<>
										<dt className="text-lg">
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
												<span className="font-medium text-gray-900">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													<ChevronDownIcon
														className={classNames(
															open ? "-rotate-180" : "rotate-0",
															"h-6 w-6 transform"
														)}
														aria-hidden="true"
													/>
												</span>
											</Disclosure.Button>
										</dt>
										<dd>
											<Disclosure.Panel as="dd" className="mt-2 pr-12">
												<p className="text-base text-gray-500">{faq.answer}</p>
												{faq.answer2 && (
													<p className="mt-2 text-base text-gray-500">
														{faq.answer2}
													</p>
												)}
											</Disclosure.Panel>
										</dd>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
