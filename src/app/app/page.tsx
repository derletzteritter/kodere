'use client';

const locationOptions = [
	{
		id: 'remote-on-location',
		label: 'Remote & On-location',
	},
	{
		id: 'on-location',
		label: 'On-location',
	},
	{
		id: 'remote',
		label: 'Remote',
	},
];

export const mockJobs = [
	{
		id: 1,
		title: 'Test title',
		content: 'Hi. I want develeoper now!',
	},
	{
		id: 2,
		title: 'Test title',
		content: 'Hi. I want develeoper now!',
	},
	{
		id: 3,
		title: 'Test title',
		content: 'Hi. I want develeoper now!',
	},
	{
		id: 4,
		title: 'Test title',
		content: 'Hi. I want develeoper now!',
	},
	{
		id: 5,
		title: 'Test title',
		content: 'Hi. I want develeoper now!',
	},
];

import { useSession } from 'next-auth/react';
import { } from "../comp"

export default function AppPage() {
	useSession({ required: true });
	return (
		<div className="w-full max-w-5xl mx-auto mt-4">
			<div className="flex">
				<div className="h-full w-1/4">
					<div>
						<input
							placeholder="Søk på jobber"
							className="px-3 py-2 text-sm shadow-sm border border-gray-300 rounded-md"
						/>
						<div className="mt-4">
							<label className="text-base text-gray-900">Notifications</label>
							<fieldset className="mt-4">
								<legend className="sr-only">Notification method</legend>
								<div className="space-y-4">
									{locationOptions.map((notificationMethod) => (
										<div key={notificationMethod.id} className="flex items-center">
											<input
												id={notificationMethod.id}
												name="notification-method"
												type="radio"
												defaultChecked={notificationMethod.id === 'email'}
												className="h-4 w-4 border-gray-300 text-black focus:ring-black"
											/>
											<label
												htmlFor={notificationMethod.id}
												className="ml-3 block text-xs font-medium text-gray-700"
											>
												{notificationMethod.label}
											</label>
										</div>
									))}
								</div>
							</fieldset>
						</div>
					</div>
				</div>
				<div className="h-full w-full max-w-xl space-y-5">
					{mockJobs.map((job) => (
                        <FeedListing job={job}/>
					))}
				</div>
			</div>
		</div>
	);
}
