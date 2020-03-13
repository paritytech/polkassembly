export const verificationEmailTemplate = `
    <p>
        Welcome aboard <%= username %>!<br/><br/>

        For security purposes, please confirm your email address here - <a target="_blank" href="<%= verifyUrl %>">verify your account</a><br/><br/>

        See you soon,<br/><br/>
        Polkassembly Team
    </p>
`;

export const resetPasswordEmailTemplate = `
    <p>
        Hi <%= username %>!<br/><br/>

        It looks like you need to reset your password.<br />
        Your secret is safe with us, and this will be a breeze.<br /><br />

        Go ahead and follow the link to reset your password:<br /><br />
        <a href="<%= resetUrl %>">Reset Your Password</a><br /><br />

        Just a heads up, to make sure your information is safe and secure, the link will expire after 24 hours.<br /><br />

        If you didn't request a password change, then just ignore this message.<br /><br />

        Polkassembly Team
    </p>
`;

export const postSubscriptionMailTemplate = `
    <p>
        Hi <%= username %>!<br/><br/>

        <br />
        <%= authorUsername %> has commented on a <a href="<%= domain %>/post/<%= postId %>">post you subscribed to</a>.<br /><br />

        comment: <%= content %><br />

        Polkassembly Team
    </p>
`;

export const undoEmailChangeEmailTemplate = `
    <p>
        Hi  <%= username %>!<br/><br/>

        Your email on polkassembly.io was changed to <%= userEmail %>.<br />
        If you did the change, then everything is fine, you have nothing to do.<br /><br />

        If you did not change your email and suspect that it is a malicious attempt, click on the following link to change your account email back to: <%= undoEmail %><br /><br />
        <a href="<%= undoUrl %>">Recover Your Email</a><br /><br />

        This link is valid for 48 hours, past this time, you will not be able to use it to recover your email. If you did not have time to click it and are a victim of a malicious email change, please open an issue on https://github.com/paritytech/polkassembly/issues/new<br /><br />

        Polkassembly Team
    </p>
`;

export const ownProposalCreatedEmailTemplate = `
    <p>
        Hi <%= username %>!<br/><br/>

        You have submitted a motion/proposal on chain.<br />
        Click on the following link to login to Polkassembly and edit the proposal/motion description and title: <a href="<%= postUrl %>"><%= postUrl %></a>.<br /><br />

        You can deactivate this notification in your notification control center: <a href="<%= domain %>/notifications"><%= domain %>/notifications</a>

        Polkassembly Team
    </p>
`;

export const newProposalCreatedEmailTemplate = `
    <p>
        Hi <%= username %>!<br/><br/>

        There is a new <%= type %> on chain.<br />
        Click on the following link to check it out: <a href="<%= postUrl %>"><%= postUrl %></a>.<br /><br />

        You can deactivate this notification in your notification control center: <a href="<%= domain %>/notifications"><%= domain %>/notifications</a>

        Polkassembly Team
    </p>
`;

export const reportContentEmailTemplate = `
    <p>
        Content Reported.<br />
        Reporter: <%= username %><br />
        Reason:<br />
        <%= reason %> <br />
        Comments:<br />
        <%= comments %> <br />
        type: <%= type %> <br />
        id: <%= contentId %> <br />
    </p>
`;
