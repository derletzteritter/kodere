"use client"

import React from 'react'

type FeedListingProps = {
    job: {
        id: number;
        title: string;
        content: string;
    }
}

export const FeedListing: React.FC<FeedListingProps> = ({ job }) => {
    return (
        
						<div
							key={job.id}
							className="border border-gray-300 rounded-md px-3 py-2 shadow-sm flex flex-col space-y-10"
						>
							<div>
								<h2 className="text-md font-medium mb-3">{job.title}</h2>
								<p className="text-xs text-gray-600">{job.content}</p>
							</div>
							<div className="flex items-center space-x-3">
								<button className="shadow-sm text-sm border border-neutral-700 bg-neutral-800 px-3 py-1.5 rounded-md text-white">
									Les mer
								</button>
								<button className="shadow-sm text-sm border border-gray-300 px-3 py-1.5 rounded-md">
									Send melding
								</button>
							</div>
						</div>
    )
}
