import React from 'react';

function Articles({ filter, articles }) {
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		if (filter.upvote) {
			const newData = articles.sort((a, b) => (b.upvotes = a.upvotes));
			setData([...newData]);
		} else if (filter.recent) {
			const newData = articles.sort(
				(a, b) => new Date(b.date) - new Date(a.date)
			); 
			setData([...newData]);
		} else {
			const newData = articles.sort((a, b) => (b.upvotes = a.upvotes));
			setData([...newData]);
		}
		return () => null;
	}, [filter.upvote, filter.recent, filter, articles]);

	return (
		<div className='card w-50 mx-auto'>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Upvotes</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{articles &&
						articles.map((article, index) => (
							<tr key={index} data-testid='article'>
								<td data-testid='article-title'>{article.title}</td>
								<td data-testid='article-upvotes'>
									{article.upvotes.toString()}
								</td>
								<td data-testid='article-date'>{article.date}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}

export default Articles;
