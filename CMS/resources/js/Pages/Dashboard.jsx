import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PostsList from '../Components/PostsList ';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className=" h-full w-full flex flex-row ">
                <div className=" w-1/5 h-screen sm:px-6 lg:px-8 bg-black p-5">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 w-4/5 ">
                        <div className=" p-6 text-gray-900 dark:text-gray-100">
                            estas vivo
                        </div>
                    </div>
                </div>
                <div className=" bg-neutral-500 columns-1 h-screen w-full ">
                    <div className=" bg-neutral-800 h-2/5 w-full p-10 ">
                        <div className=" bg-neutral-600  h-full ">
                            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 w-4/5 h-4/5 m-auto p-auto">
                                <div className=" p-auto text-gray-900 dark:text-gray-100">
                                    carrucel aqui
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-neutral-100 flex h-full ">
                        <div className="bg-neutral-300 h-full w-4/6 m-10 p-10">
                            <PostsList/>
                        </div>
                        <div className="bg-red-700 w-2/6 h-full flex">

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
