import temida from "../images/temida.webp";

export default function Header() {
	return (
		<div className="relative bg-indigo-800">
			<div className="absolute inset-0">
				<img
					className="h-full w-full object-cover"
					src={temida}
					alt="Symbol sprawiedliwości, prawa i wiecznego porządku - Temida"
				/>
				<div
					className="absolute inset-0 bg-red-700 mix-blend-multiply"
					aria-hidden="true"
				/>
			</div>
			<div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
				<p className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
					Dane kontaktowe
				</p>
				<h1 className="mt-6 max-w-prose text-xl text-indigo-100">
					Kancelaria Komornicza nr XIII w Płocku - Sylwester Karolak
				</h1>
			</div>
		</div>
	);
}
