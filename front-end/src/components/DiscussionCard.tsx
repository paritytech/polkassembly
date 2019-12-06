import * as moment from 'moment'
import * as React from 'react'
import { FaComment } from 'react-icons/fa';
import styled from 'styled-components';

const DiscussionCard = styled.div`
    padding: 2rem 3rem 1.5rem 3rem;
    background-color: #FFF;
    border: 1px solid #EEE;
    h4 {
        color: #282828;
        font-weight: 500;
        font-size: 1.6rem;
        margin-bottom: 0.3rem; 
    }
    .authorAndDate {
        color: #555;
        font-weight: 400;
        font-size: 1.2rem;
        margin-bottom: 0.6rem;
        span {
            font-weight: 500;
        }
    }
    ul {
        color: #B5AEAE;
        font-size: 1rem;
        font-family: 'Roboto Mono';
        font-weight: 500;
        li {
            display: inline;
            margin-right: 1.5rem;
        }
    }

    @media only screen and (max-width: 576px) {
        & {
            padding: 1.25rem 0.938rem;       
        }
    }
`;

export interface DiscussionProps {
  author: string
  creation_date: string
  replies?: string
  title: string
}

export default function Discussion ({
	author,
	creation_date,
	replies,
	title
}:DiscussionProps) {

	return (
		<DiscussionCard>
			<h4>{title}</h4>
			<div className="authorAndDate">posted by <span>{author}</span> {moment.default(creation_date, 'YYYY-MM-DDTHH:mm:ss.SSS').fromNow()}</div>
			<ul>
				<li><FaComment/> {replies} replies</li>
			</ul>
		</DiscussionCard>
	)
}