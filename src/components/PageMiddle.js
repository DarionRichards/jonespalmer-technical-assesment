export const PageMiddle = () => {
	return (
		<section className="page-middle-background">
			<section className="page-middle-container">
				<div className="page-m-left">
					<div className="page-m-left-content">
						<div className="page-m-left-content-title">What We Do</div>
						<div>
							<p className="page-m-left-content-header top">We make business</p>
							<p className="page-m-left-content-header bottom">
								understandable
								<span className="page-m-left-content-header top">.</span>
							</p>
						</div>
						<div className="page-m-left-content-description-container">
							<p className="page-m-left-description page-m-left-content-description-light">
								Our{" "}
								<span className="page-m-left-content-description-medium">
									consultancy-led approach gets us to the heart of your story,
								</span>{" "}
								helping to structure your investment case and key messages
								through innovative and informed design.
							</p>
						</div>
						<div className="page-m-left-button-container">
							<a href="/" className="page-m-left-button corp image">
								<span>Corporate reporting</span>
							</a>

							<a href="/" className="page-m-left-button sust image">
								<span>Sustainability</span>
							</a>

							<a href="/" className="page-m-left-button corpbrand image">
								<span>Corporate brand development</span>
							</a>
						</div>
					</div>
				</div>
				<div className="page-m-right">
					<img
						src="https://via.placeholder.com/1017x991"
						alt="placeholder"
						className="page-m-right-img"
					/>
				</div>
			</section>
		</section>
	);
};
