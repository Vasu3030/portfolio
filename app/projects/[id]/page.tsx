'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { contents } from '../data';
import Content from '@/components/Content';

export default function ProjectPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const projectId = searchParams.get("projectId");

    if (!projectId || isNaN(Number(projectId))) {
        return <div>Project not found</div>;
    }

    const id = Number(projectId);

    return (
        <div className='flex flex-col justify-center items-center py-20 px-3'>
                <button
                    onClick={() => router.push('/#projects')}
                    className="fixed top-2 left-2 z-50 w-[8rem] flex flex-row justify-around items-center px-2 py-2 bg-[#0f172a] text-white hover:text-blue-400 transition rounded-md shadow-lg cursor-pointer"
                >

                    <FaArrowLeft />
                    <span>Retour</span>
                </button>
                <Content content={contents[id].content} />
        </div>
    );
}
