"use client";

const Loading = ({ isLoading }: any) => {
    return (
        isLoading && (
            <div className="absolute w-full h-screen overflow-hidden bg-black z-10">
                <div className="flex justify-center items-center h-full">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-200"></div>
                </div>
            </div>
        )
    );
};

export default Loading;