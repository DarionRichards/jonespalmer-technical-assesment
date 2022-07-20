import {partnerData} from "../data/partnerData";

export const PageBottom = () => {
	return (
		<section className="page-bottom-background">
			<section className="page-bottom-container">
				<div className="page-b-title">Our Partners</div>
				<div className="page-b-paragraph-container">
					<h2 className="page-b-paragraph left">
						We're{" "}
						<span className="green">proud to partner with over 100 PLCs</span>{" "}
						on their corporate communications.
					</h2>
					<q className="page-b-paragraph right">
						We pride ourselves on{" "}
						<span className="bold">creating long-lasting relationships</span>{" "}
						that allow us to plan and continually develop your story so that it
						aligns and evolves with your business activities year-on-year
					</q>
				</div>
				<div className="page-b-partner-container">
					{partnerData.map((partner) => {
						return <img src={partner.src} alt={partner.alt} />;
					})}
				</div>
			</section>
		</section>
	);
};
