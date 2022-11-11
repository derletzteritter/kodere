import React from 'react';
import { ProfileAction } from './ProfileAction';

const Header: React.FC = () => {
	return (
		<div className="w-full h-[60px] bg-gray-200 flex">
			<div className="lg:max-w-5xl mx-auto w-full flex items-center justify-between">
				<div>
					<h1 className="font-bold text-lg">Freelance</h1>
				</div>
				<div className="w-[70%]">
					<input placeholder="Søk på bedrifter eller konsulenter" className="px-3 py-2 w-full text-sm rounded-md shadow-sm border border-gray-300 outline-none text-gray-500" />
				</div>
				<div className="flex space-x-4 items-center">
					<ProfileAction />
				</div>
			</div>
		</div>
	);
};

export default Header;
