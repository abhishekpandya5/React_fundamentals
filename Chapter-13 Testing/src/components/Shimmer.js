function Shimmer() {
	return (
		<div
			data-testid="shimmer"
			className="shimmer card w-64 mb-8 bg-gray-100 rounded-md p-2"
		></div>
	);
}

export default Shimmer;

// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';

// function Shimmer() {
// 	return (
// 		<div className="card">
// 			<Skeleton count={1} width={200} height={125} />
// 			<h2>
// 				<Skeleton count={1} width={200} height={27} />
// 			</h2>
// 			<h3>
// 				<Skeleton count={1} width={200} height={27} />
// 			</h3>
// 			<h4>
// 				<Skeleton count={1} width={200} height={27} />
// 			</h4>
// 		</div>
// 	);
// }
