<template>
    <div class="w-full h-screen relative bg-gray-800 text-white">
        <MovingFlowFieldBackground class="z-0 fixed w-full h-auto" />
        <div class="content z-10 relative w-full h-auto">
            <div class="surface-ground flex flex-col justify-center items-center p-2">
                <div class="grid grid-nogutter z-10">
                    <div class="col-12 md:col-6 p-8">
                        <div class="text-white text-2xl font-medium mb-6">Contact Us</div>
                        <div class="text-gray-300 line-height-3 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </div>
                        <a class="inline-flex items-center text-blue-300 font-bold no-underline cursor-pointer">
                            <span class="mr-3">View Address on Google Maps</span>
                            <i class="pi pi-arrow-right"></i>
                        </a>
                        <ul class="list-none p-0 m-0 mt-6 text-white">
                            <li class="flex items-center mb-3">
                                <i class="pi pi-phone mr-2"></i>
                                <span>+123456789</span>
                            </li>
                            <li class="flex items-center mb-3">
                                <i class="pi pi-twitter mr-2"></i>
                                <span>@prime_vue</span>
                            </li>
                            <li class="flex items-center">
                                <i class="pi pi-inbox mr-2"></i>
                                <span>contact@primetek.com.tr</span>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 md:col-6">
                        <div class="formgrid grid p-4 md:p-6 lg:p-8 bg-gray-900 rounded-md">
                            <div class="col-12 lg:col-6 mb-4">
                                <InputText id="firstname" type="text" class="py-3 px-2 text-lg w-full"
                                    placeholder="First Name" />
                            </div>
                            <div class="col-12 lg:col-6 mb-4">
                                <InputText id="lastname" type="text" class="py-3 px-2 text-lg w-full"
                                    placeholder="Last Name" />
                            </div>
                            <div class="col-12 mb-4">
                                <InputText id="email" type="text" class="py-3 px-2 text-lg w-full"
                                    placeholder="Email" />
                            </div>
                            <div class="col-12 mb-4">
                                <InputText id="phone" type="text" class="py-3 px-2 text-lg w-full"
                                    placeholder="Phone" />
                            </div>
                            <div class="col-12 mb-4">
                                <Textarea id="message" :rows="3" :autoResize="true" class="py-3 px-2 text-lg w-full"
                                    placeholder="Message"></Textarea>
                            </div>
                            <div class="col-12 text-right">
                                <Button type="button" label="Submit" icon="pi pi-envelope"
                                    class="px-5 py-3 w-auto"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-950 bg-opacity-75 p-4 md:p-6 lg:p-8 w-full">
                <div class="bg-gray-900 p-4 rounded-md">
                    <div class="grid">
                        <div class="col-12 md:col-3 flex flex-wrap justify-start mb-3">
                            <img src="" alt="footer sections" width="50" height="50" class="mr-3" />
                            <div class="text-gray-300 font-bold text-5xl">Bastion</div>
                        </div>
                        <div class="col-12 md:col-3">
                            <div class="text-white text-lg mb-4" style="max-width: 290px">
                                Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands
                            </div>
                            <div class="text-white mb-3">
                                <i class="pi pi-phone surface-800 border-round p-1 mr-2"></i>(31) 20 779 8986
                            </div>
                            <div class="text-white mb-3">
                                <i class="pi pi-inbox surface-800 border-round p-1 mr-2"></i>hello@bastion.co
                            </div>
                        </div>
                        <div class="col-12 md:col-3 text-gray-200">
                            <div class="text-white font-bold line-height-3 mb-3">Company</div>
                            <a class="line-height-3 block cursor-pointer mb-2">About Us</a>
                            <a class="line-height-3 block cursor-pointer mb-2">News</a>
                            <a class="line-height-3 block cursor-pointer mb-2">Investor Relations</a>
                            <a class="line-height-3 block cursor-pointer mb-2">Careers</a>
                            <a class="line-height-3 block cursor-pointer">Media Kit</a>
                        </div>
                        <div class="col-12 md:col-3 text-gray-200">
                            <div class="text-white font-bold line-height-3 mb-3">Resources</div>
                            <a class="line-height-3 block cursor-pointer mb-2">Get Started</a>
                            <a class="line-height-3 block cursor-pointer mb-2">Learn</a>
                            <a class="line-height-3 block cursor-pointer">Case Studies</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import MovingFlowFieldBackground from '../components/MovingFlowFieldBackground.vue';

export default {
    name: 'ContactView',
    components: {
        MovingFlowFieldBackground
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped></style>