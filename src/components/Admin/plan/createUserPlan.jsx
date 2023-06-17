import React, {Component} from 'react';
import Navbar from '../home/navBarHomeAdm';
import SelectUser from './selectUser';
import DetailPay from './detailPay';


export class CreateUserPLan extends Component {
    render() {
        return (
                <div class="max-w-full min-w-sd max-h-full">
                  <Navbar/>
                  <div className='grid grid-rows-3 grid-cols-4 gap-4 max-w-full'>
                    <div className='row-span-3 col-span-2 max-w-full'>
                      <div className="flex col-span-2 row-span-1 p-6 max-w-full max-h-6">
                        <h1 className="font-sans text-3xl hover:texto-2xl">Seleccionar el usuario para continuar</h1>
                      </div>
                      <div>
                        <SelectUser/>
                        <SelectUser/>
                        <SelectUser/>
                        <SelectUser/>
                      </div>
                    </div>
                    <div className="row-span-3 col-span-2 max-w-full">
                        <DetailPay/>
                    </div>
                  </div>


                </div>
            );

    }

}


export default CreateUserPLan;