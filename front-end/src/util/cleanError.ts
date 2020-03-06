export default function (text:string): string {
	return text.replace(/Network error: |GraphQL error: /g,'');
}

