import { useState } from 'react';

const Section = ({ id,title, desc, shouldVisible, setVisible }) => {
	return (
		<div className="border border-teal-400 border-solid p-2 m-2">
			<h3 className="font-bold text-xl">{title}</h3>
			{shouldVisible ? (
				<>
					<button
						className="cursor-pointer underline"
						onClick={() => setVisible()}
					>
						Hide
					</button>
					<p>{desc}</p>
				</>
			) : (
				<button
					className="cursor-pointer underline"
					onClick={() => setVisible(id)}
				>
					Show
				</button>
			)}
		</div>
	);
};

const Instamart = () => {
	const [visibleSection, setVisibleSection] = useState('about');
	return (
		<div>
			<Section
				id="about"
				shouldVisible={visibleSection === "about"}
				setVisible={setVisibleSection}
				title={'About Instamart'}
				desc={
					'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word '
				}
			/>
			<Section
				id="teams"
				shouldVisible={visibleSection === 'teams'}
				setVisible={setVisibleSection}
				title={'Teams Instamart'}
				desc={
					'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word '
				}
			/>
			<Section
				id="career"
				shouldVisible={visibleSection === 'career'}
				setVisible={setVisibleSection}
				title={'Career Instamart'}
				desc={
					'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word '
				}
			/>
		</div>
	);
};

export default Instamart;
