import documentImg from '../images/document.jpg'

export default function About() {
	return (
		<div className="relative overflow-hidden bg-white py-16" id="about">
			<div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
				<div
					className="relative mx-auto h-full max-w-prose text-lg"
					aria-hidden="true"
				>
					<svg
						className="absolute top-12 left-full translate-x-32 transform"
						width={404}
						height={384}
						fill="none"
						viewBox="0 0 404 384"
					>
						<defs>
							<pattern
								id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
							fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
						/>
					</svg>
					<svg
						className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
						width={404}
						height={384}
						fill="none"
						viewBox="0 0 404 384"
					>
						<defs>
							<pattern
								id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
							fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
						/>
					</svg>
					<svg
						className="absolute bottom-12 left-full translate-x-32 transform"
						width={404}
						height={384}
						fill="none"
						viewBox="0 0 404 384"
					>
						<defs>
							<pattern
								id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
							fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
						/>
					</svg>
				</div>
			</div>
			<div className="relative px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-prose text-lg">
					<h2>
						<span className="block text-center text-lg font-semibold text-red-600">
							Komornik Sądowy przy Sądzie Rejonowym w Płocku
						</span>
						<span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
							Sylwester Karolak
						</span>
					</h2>
				</div>
				<div className="prose prose-lg prose-red mx-auto mt-12 text-gray-500">
					<p>
						Jestem absolwentem Liceum Ogólnokształcącego im. Marszałka
						Stanisława Małachowskiego w Płocku. Ukończyłem Administrację na WPiA
						Uniwersytetu Marii Curie-Skłodowskiej w Lublinie oraz Prawo na WPiA
						Uniwersytetu Kardynała Stefana Wyszyńskiego w Warszawie.
					</p>

					<p>
						W mojej codziennej pracy przyświecają mi słowa:
					</p>

					<blockquote>
						<p>
							Żadne zadanie nie jest szczególnie trudne, jeśli podzielisz je na
							mniejsze podzadania.
						</p>{" "}
						Henry Ford
					</blockquote>
					{/* <figure>
						<img
							className="w-full rounded-lg"
							src={documentImg}
							alt="Sylwester Karolak Komornik Sądowy przy Sądzie Rejonowym w Płocku"
							width={1310}
							height={873}
						/>
						<figcaption>
							Sylwester Karolak Komornik Sądowy przy Sądzie Rejonowym w Płocku
						</figcaption>
					</figure> */}
					<h2>Doświadczenie zawodowe</h2>
					<p>
						Doświadczenie zawodowe w egzekucji sądowej zdobywam już od 2009r.
						Decyzją Ministra Sprawiedliwości z dnia 21-11-2022r. zostałem
						powołany na stanowisko Komornika Sądowego przy Sądzie Rejonowym w
						Płocku.
					</p>
					<p>
						Posiadam odpowiednie kompetencje oraz wiedzę merytoryczną i
						praktyczną do pełnienia funkcji Komornika Sądowego. W swojej pracy
						do każdej prowadzonej sprawy podchodzę indywidualnie co daje
						gwarancje rzetelnego i skutecznego prowadzenia postępowań
						egzekucyjnych.
					</p>
				</div>
			</div>
		</div>
	);
}
