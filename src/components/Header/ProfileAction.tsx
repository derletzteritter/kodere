'use client';

import { useSession } from 'next-auth/react';
import { BellIcon } from '@heroicons/react/24/outline';

export const ProfileAction = () => {
	const { data } = useSession({ required: true });
	return (
		<div className="flex items-center space-x-6">
			<div className="hover:cursor-pointer relative">
				<BellIcon className="h-6 w-6 text-gray-500" />
				<span className="flex h-2 w-2 absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 transform">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
				</span>
			</div>
			<div className="ml-3 block flex-shrink-0 hover:cursor-pointer">
				<div className="flex items-center">
					<div>
						<img
							className="inline-block h-9 w-9 rounded-full"
							src={data?.user?.image?.toString()}
							alt=""
						/>
					</div>
					<div className="ml-3">
						<div>
							<p className="text-sm text-black font-medium text-gray-700">{data?.user?.name}</p>
							<p className="text-xs text-gray-500">Vis profil</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
