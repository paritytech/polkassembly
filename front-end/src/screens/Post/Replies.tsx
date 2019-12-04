import * as React from 'react';

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
							<div>{content}</div>
						</div>
					);
				})
			}
		</div>
	)
}

export default Replies;