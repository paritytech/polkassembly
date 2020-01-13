import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Sidebar } from 'semantic-ui-react';

interface Props {
	children?: ReactNode,
	className?: string,
	onPusherClick?: boolean,
	visible?: boolean
}

const MobileMenu = ({
	children,
	onPusherClick
}:Props) => {
	const [visible, setVisible] = useState(false);

	const handleToggle = () => {
		setVisible(true);
	};

	return (
		<Sidebar.Pushable>
			<Sidebar
				as={Menu}
				animation="overlay"
				icon="labeled"
				inverted
				vertical
				visible={visible}
			>
				<Menu.Item as={Link} to="/discussions" id='title'>Discussions</Menu.Item>
				<Menu.Item as={Link} to="/proposals" id='title'>Proposals</Menu.Item>
			</Sidebar>
			<Sidebar.Pusher
				dimmed={visible}
				onClick={onPusherClick}
				style={{ minHeight: '5rem' }}
			>
				<Menu fixed="top" inverted>
					<Menu.Item onClick={handleToggle}>
						<Icon name="sidebar" />
					</Menu.Item>
					<Menu.Item as={Link} to="/" id='title'>
						Polkassembly
					</Menu.Item>
					<Menu.Item>
						<Icon name="user" />
					</Menu.Item>
				</Menu>
				{children}
			</Sidebar.Pusher>
		</Sidebar.Pushable>
	);
};

export default MobileMenu;