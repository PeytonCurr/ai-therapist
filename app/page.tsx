import Image from "next/image";
import Icon from '@mdi/react';
import { mdiBowArrow } from '@mdi/js';
import { mdiMicrophone } from '@mdi/js';

export default function Home() {
  return (
    <div className="grid grid-cols-6 h-screen">
      <section className="bg-green-700 col-span-1">This is going to be the Sidebar</section>

      <section className="bg-green-400 col-span-5 grid grid-rows-8">
        <div className="bg-green-600 row-span-1">This will be the header</div>

        <div className="row-span-7 flex flex-col justify-between items-center">This will be the main chat Area
          <div className="w-full px-3 py-4">


            <form className="bg-white rounded-2xl shadow px-6 py-6 flex justify-start">

              <button className="me-5"><Icon path={mdiMicrophone} size={1.5}></Icon></button>

              <div className="w-full flex justify-between">
                <input id="chatMessage" type="chatMessage" placeholder="What's on your mind..." required className="w-full focus:outline-none" />

                <button><Icon path={mdiBowArrow} size={1.5} /></button>
              </div>


            </form>

          </div>

        </div>



      </section>

    </div>
  );
}
