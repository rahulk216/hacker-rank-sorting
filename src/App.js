import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = 'Sorting Articles';

function App({ articles }) {
	const [sortedArticles, setSortedArticles] = React.useState(articles);
	const [filter, setFilter] = React.useState({ upvote: false, recent: false });

	const upvote = () => {
		setFilter((i) => {
			return {
				...i,
				upvote: true,
				recent: false,
			};
		});
	};

	const recent = () => {
		setFilter((i) => {
			return {
				...i,
				upvote: false,
				recent: true,
			};
		});
	};

	// const Dates = () => {
	// 	let articlesNew = [];

	// 	Object.assign(articlesNew, sortedArticles);

	// 	articlesNew.sort((first, second) => {
	// 		const aDate = new Date(first.date);
	// 		const bDate = new Date(second.date);
	// 		if (aDate > bDate) {
	// 			return -1;
	// 		}
	// 		if (aDate < bDate) {
	// 			return 1;
	// 		}
	// 		return 0;
	// 	});

	// 	setSortedArticles(articlesNew);
	// };
	// const Upvotes = () => {
	// 	var articlesNew = [];
	// 	Object.assign(articlesNew, sortedArticles);
	// 	articlesNew.sort((first, second) => {
	// 		if (first.upvotes > second.upvotes) {
	// 			return -1;
	// 		}
	// 		if (first.upvotes < second.upvotes) {
	// 			return 1;
	// 		}
	// 		return 0;
	// 	});

	// 	setSortedArticles(articlesNew);
	// };
	return (
		<div className='App'>
			<h8k-navbar header={title}></h8k-navbar>
			<div className='layout-row align-items-center justify-content-center my-20 navigation'>
				<label className='form-hint mb-0 text-uppercase font-weight-light'>
					Sort By
				</label>
				<button
					onClick={() => upvote()}
					data-testid='most-upvoted-link'
					className='small'
				>
					Most Upvoted
				</button>
				<button
					onClick={() => recent()}
					data-testid='most-recent-link'
					className='small'
				>
					Most Recent
				</button>
			</div>
			<Articles filter={filter} articles={sortedArticles} />
		</div>
	);
}

export default App;
