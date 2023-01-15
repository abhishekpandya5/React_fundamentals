import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Shimmer() {
	return (
		<div className="card">
			<Skeleton count={1} width={200} height={125} />
			<h2>
				<Skeleton count={1} width={200} height={27} />
			</h2>
			<h3>
				<Skeleton count={1} width={200} height={27} />
			</h3>
			<h4>
				<Skeleton count={1} width={200} height={27} />
			</h4>
		</div>
	);
}

export default Shimmer;
