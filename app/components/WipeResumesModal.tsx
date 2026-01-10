import { useEffect, useState } from 'react';
import { usePuterStore } from '~/lib/puter';

interface WipeResumesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WipeResumesModal = ({ isOpen, onClose }: WipeResumesModalProps) => {
    const { kv, fs } = usePuterStore();
    const [resumes, setResumes] = useState<Resume[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isOpen) {
            loadResumes();
        }
    }, [isOpen]);

    const loadResumes = async () => {
        setIsLoading(true);
        const items = (await kv.list('resume:*', true)) as KVItem[];
        const parsed = items?.map((item) => JSON.parse(item.value) as Resume) || [];
        setResumes(parsed);
        setIsLoading(false);
    };

    const handleWipe = async () => {
        setIsLoading(true);

        // Delete all files associated with resumes
        for (const resume of resumes) {
            if (resume.resumePath) await fs.delete(resume.resumePath);
            if (resume.imagePath) await fs.delete(resume.imagePath);
        }

        // Flush KV store
        await kv.flush();

        setIsLoading(false);
        onClose();
        window.location.reload(); // Reload to reflect changes
    };

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200'>
            <div className='bg-white rounded-2xl p-6 w-full max-w-md flex flex-col gap-4 shadow-xl'>
                <div className='flex flex-col gap-1'>
                    <h2 className='text-xl font-bold text-red-600'>Danger Zone</h2>
                    <p className='text-gray-600'>Are you sure you want to wipe all data? This action cannot be undone.</p>
                </div>

                <div className='flex flex-col gap-2 max-h-[300px] overflow-y-auto bg-gray-50 p-4 rounded-lg border border-gray-100'>
                    {isLoading && resumes.length === 0 ? (
                        <p className='text-sm text-center text-gray-500'>Loading...</p>
                    ) : resumes.length > 0 ? (
                        resumes.map(r => (
                            <div key={r.id} className='flex flex-row gap-2 text-sm items-center'>
                                <span className='w-2 h-2 rounded-full bg-gray-400'></span>
                                <p className='font-medium'>{r.companyName || 'Unknown Company'}</p>
                                <span className='text-gray-400'>-</span>
                                <p className='text-gray-600'>{r.jobTitle || 'Unknown Role'}</p>
                            </div>
                        ))
                    ) : (
                        <p className='text-sm text-center text-gray-400 italic'>No resumes found to wipe.</p>
                    )}
                </div>

                <div className='flex flex-row gap-2 justify-end mt-2'>
                    <button
                        onClick={onClose}
                        className='px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors font-medium cursor-pointer'
                        disabled={isLoading}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleWipe}
                        className='px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors font-medium flex items-center gap-2 cursor-pointer'
                        disabled={isLoading || resumes.length === 0}
                    >
                        {isLoading ? 'Wiping...' : 'Wipe All Data'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WipeResumesModal;
