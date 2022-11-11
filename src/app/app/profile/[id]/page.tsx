export default function ProfilePage({ params }: { params: { id: string } }) {
	return (
		<div>
			<p>{params.id}</p>
		</div>
	);
}
