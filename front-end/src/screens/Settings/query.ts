import gql from 'graphql-tag';

export const MUTATION_CHANGE_NAME = gql`
	mutation changeName($newName: String!){
		changeName(newName: $newName){
			message
			token
		}
	}
`;

export const MUTATION_CHANGE_USERNAME = gql`
	mutation changeUsername($username: String!){
		changeUsername(username: $username){
			message
			token
		}
	}
`;

export const MUTATION_CHANGE_EMAIL = gql`
	mutation changeEmail($email: String!){
		changeEmail(email: $email){
			message
			token
		}
	}
`;

export const MUTATION_CHANGE_PASSWORD = gql`
	mutation changePassword($oldPassword: String!, $newPassword: String!){
		changePassword(oldPassword: $oldPassword, newPassword: $newPassword){
			message
		}
	}
`;

export const ADDRESS_LINK_START = gql`
	mutation addressLinkStart($network: String!, $address: String!){
		addressLinkStart(network: $network, address: $address) {
			sign_message
			message
			address_id
		}
	}
`;

export const ADDRESS_LINK_CONFIRM = gql`
	mutation addressLinkConfirm($address_id: Int!, $signature: String!) {
    	addressLinkConfirm(address_id: $address_id, signature: $signature) {
			message
			token
		}
	}
`;

export const ADDRESS_UNLINK = gql`
	mutation addressUnlink($address: String!) {
		addressUnlink(address: $address) {
			message
			token
		}
	}
`;

export const RESEND_VERIFY_EMAIL_TOKEN = gql`
	mutation resendVerifyEmailToken {
		resendVerifyEmailToken {
			message
		}
	}
`;

export const CHANGE_NOTIFICATION_PREFERENCE = gql`
	mutation changeNotificationPreference(
		$post_participated: Boolean
		$post_created: Boolean
		$new_proposal: Boolean
		$own_proposal: Boolean
	) {
		changeNotificationPreference(
			post_participated: $post_participated
			post_created: $post_created
			new_proposal: $new_proposal
			own_proposal: $own_proposal
		) {
			message
		}
	}
`;

export const NOTIFICATION=gql`
    query Notification {
		notification {
			post_created
			post_participated
			new_proposal
			own_proposal
		}
    }
`;

