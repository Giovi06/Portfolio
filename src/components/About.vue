<template>
    <div class="w-full h-screen relative bg-gray-800 text-white">
        <StarBackground class="z-0 fixed w-full  h-max " />
        <div class="content z-10 relative flex flex-col items-center justify-center h-auto p-8">
            <img src="../assets/ProfilBild-Mahara.jpeg" alt="Profile Image of Giovanni Innamoratos"
                class=" rounded-full border-4 border-gray-500  mb-5">


            <div class="surface-section px-4 py-4 md:px-6 lg:px-8 text-center">
                <div class="mb-3 font-bold text-3xl">
                    <span class=" text-white ">Giovanni Innamorato </span>
                    <span class=" text-blue-600"> </span>
                </div>
                <div class="text-700 mb-6">Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</div>
                <div class="grid">
                    <div class="col-12 md:col-4 mb-4 px-5 hover:bg-gray-950  hover:bg-opacity-30 rounded-3xl ">
                        <span class="p-3 shadow-2 mb-3 inline-block surface-card border-radius: 10px">
                            <i class="pi pi-desktop text-4xl text-blue-500"></i>
                        </span>
                        <div class="text-900 text-xl mb-3 font-medium">Built for Developers</div>
                        <span class="text-700 line-height-3">Duis aute irure dolor in reprehenderit in voluptate velit
                            esse
                            cillum dolore eu fugiat nulla pariatur.</span>
                    </div>
                    <div class="col-12 md:col-4 mb-4 px-5 hover:bg-gray-950  hover:bg-opacity-30 rounded-3xl">
                        <span class="p-3 shadow-2 mb-3 inline-block surface-card border-radius: 10px">
                            <i class="pi pi-lock text-4xl text-blue-500"></i>
                        </span>
                        <div class="text-900 text-xl mb-3 font-medium">End-to-End Encryption</div>
                        <span class="text-700 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere
                            sollicitudin aliquam ultrices sagittis.</span>
                    </div>
                    <div class="col-12 md:col-4 mb-4 px-5 hover:bg-gray-950  hover:bg-opacity-30 rounded-3xl">
                        <span class="p-3 shadow-2 mb-3 inline-block surface-card border-radius: 10px">
                            <i class="pi pi-check-circle text-4xl text-blue-500"></i>
                        </span>
                        <div class="text-900 text-xl mb-3 font-medium">Easy to Use</div>
                        <span class="text-700 line-height-3">Ornare suspendisse sed nisi lacus sed viverra tellus. Neque
                            volutpat ac tincidunt vitae semper.</span>
                    </div>
                    <div class="col-12 md:col-4 mb-4 px-5 hover:bg-gray-950  hover:bg-opacity-30 rounded-3xl">
                        <span class="p-3 shadow-2 mb-3 inline-block surface-card border-radius: 10px">
                            <i class="pi pi-globe text-4xl text-blue-500"></i>
                        </span>
                        <div class="text-900 text-xl mb-3 font-medium">Fast & Global Support</div>
                        <span class="text-700 line-height-3">Fermentum et sollicitudin ac orci phasellus egestas tellus
                            rutrum tellus.</span>
                    </div>
                    <div class="col-12 md:col-4 mb-4 px-5 hover:bg-gray-950  hover:bg-opacity-30 rounded-3xl">
                        <span class="p-3 shadow-2 mb-3 inline-block surface-card border-radius: 10px">
                            <i class="pi pi-github text-4xl text-blue-500"></i>
                        </span>
                        <div class="text-900 text-xl mb-3 font-medium">Open Source</div>
                        <span class="text-700 line-height-3">Nec tincidunt praesent semper feugiat. Sed adipiscing diam
                            donec adipiscing tristique risus nec feugiat. </span>
                    </div>
                    <div class="col-12 md:col-4 md:mb-4 mb-0 px-3 hover:bg-gray-950  hover:bg-opacity-30 rounded-3xl">
                        <span class="p-3 shadow-2 mb-3 inline-block surface-card border-radius: 10px">
                            <i class="pi pi-shield text-4xl text-blue-500"></i>
                        </span>
                        <div class="text-900 text-xl mb-3 font-medium">Trusted Security</div>
                        <span class="text-700 line-height-3">Mattis rhoncus urna neque viverra justo nec ultrices. Id
                            cursus
                            metus aliquam eleifend.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StarBackground from './StarBackground.vue';

export default {
    name: 'About',
    components: {
        StarBackground,
    }
}
</script>

<style lang="scss" scoped></style>