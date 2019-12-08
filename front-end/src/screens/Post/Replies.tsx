import * as React from 'react';
import ReactMarkdown from 'react-markdown';

const className = 'Reply';
// FIXME Should be typed
const Replies = ({ replies } : any) => {
	return (
		<div className='Replies'>
			<hr/>
			<div>Replies</div>
			{
				replies.map((reply:any) => {
					const { author, content, created_at } = reply;
					return (
						<div className={className} key={created_at}>
							<h3>{author.username} - {created_at}</h3>
							<ReactMarkdown source={content} />
						</div>
					);
				})
			}
		</div>
	)
}

export default Replies;