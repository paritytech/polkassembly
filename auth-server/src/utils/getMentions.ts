// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

export default (content: string): string[] => {
	const mentions: string[] = [];
	let mention = '';
	let foundMention = false;

	for (let i = 0; i < content.length; i++) {
		if (content[i] === '@') {
			foundMention = true;
			continue;
		}

		if (content[i] === ' ' || content[i] === ']') {
			if (mention) {
				if (!mentions.includes(mention)) {
					mentions.push(mention);
				}
			}

			mention = '';
			foundMention = false;
			continue;
		}

		if (foundMention) {
			mention += content[i];
		}
	}

	if (mention) {
		if (!mentions.includes(mention)) {
			mentions.push(mention);
		}
	}

	return mentions;
};
