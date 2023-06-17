import React, {Component } from 'react';
import Navbar from '../home/navBarHome';

export class TrainingHistory extends Component {
    render() {
        return(
            <div>
                <Navbar/>
                <div className='bg-gray'>
                    <div className="relative flex flex-col justify-center min-h-screen overflow-auto">
                        <div className="w-full p-6 m-auto bg-white  rounded-lg shadow-md lg:max-w-xl">
                                <div class="top-0 left-0 right-0 p-6">
                                    <h1 className="text-3xl font-semibold text-center text-purple-700">HISTORIAL ENTRENAMIENTOS</h1>
                                </div>
                                    <div className="overflow-hidden">
                                        <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                                            <div className="">
                                                <div class="text-xl font-medium text-black">Taller de baile</div>
                                                <p class="text-slate-500">Champeta, 27 de noviembre a las 4:30 pm</p>
                                            </div>
                                        </div>
                                        <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                                            <div>
                                                <div class="text-xl font-medium text-black">Taller de baile</div>
                                                <p class="text-slate-500">Urbano, 1 de diciembre a las 4:30 pm</p>
                                            </div>
                                        </div>
                                        <div class="p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                                            <div>
                                                <div class="text-xl font-medium text-black">Taller de baile</div>
                                                <p class="text-slate-500">Urbano, 1 de diciembre a las 4:30 pm</p>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div> 

            </div>
        );
    }
}
export default TrainingHistory;