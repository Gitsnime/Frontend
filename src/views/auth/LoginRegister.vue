<template>
    <VContainer class="h-fit">
        <VText variant="md" class="text-center ">Welcome to Gitsnime!</VText>
        <VContainer class="bg-primary-380 rounded-2xl mt-5 max-w-fit mx-auto">
            <VTabs v-model="selectedTab" :items="tab" default-class="!rounded-2xl !px-12" inactive-class="!text-primary"
                class="" active-class="!bg-primary !text-white !rounded-2xl" hide-slider />
        </VContainer>
        <VText variant="md" color="#5B5B5B" class=" mt-8">
            Lorem Ipsum is simply dummy text of the printing and <br> typesetting industry.
        </VText>
        <VContainer class="mt-8">
            <VInput rounded type="text" color="black" placeholder="Enter your Username" v-model="username"
                label="Username" />
            <br />
            <!-- <VInput rounded :type="showPass ? 'text' : 'password'" color="black" placeholder="Enter your Password"
                v-model="password" label="Password" :append-icon="showPass ? 'mdi:eye-outline' : 'mdi:eye-off'"
                @clickAppend="() => { showPass = !showPass }" />
            <br />
            <VInput rounded :type="showPass ? 'text' : 'password'" color="black" placeholder="Confi your Password"
                v-model="password" label="Confirm Password" :append-icon="showPass ? 'mdi:eye-outline' : 'mdi:eye-off'"
                @clickAppend="() => { showPass = !showPass }" /> -->
            <div :class="mode === 'register' ? 'flex items-center w-full gap-5' : 'block'">
                <div :class="mode === 'register' ? 'w-1/2' : ''">
                    <VInput rounded :type="showPass ? 'text' : 'password'" color="black" placeholder="Enter your Password"
                        v-model="password" label="Password" :append-icon="showPass ? 'mdi:eye-outline' : 'mdi:eye-off'"
                        @clickAppend="() => { showPass = !showPass }" />
                </div>
                <div v-if="mode === 'register'" class="w-1/2">
                    <VInput rounded :type="showVerifPass ? 'text' : 'password'" color="black"
                        placeholder="Confirm your Password" v-model="verifPass" label="Confirm Password"
                        :append-icon="showVerifPass ? 'mdi:eye-outline' : 'mdi:eye-off'"
                        @clickAppend="() => { showVerifPass = !showVerifPass }" class="w-1/2" />
                </div>
            </div>
            <VContainer v-if="mode === 'register'" class="mt-5">
                <VText variant="md">Choose Avatar</VText>
                <VContainer class="flex items-center gap-2 mt-2">
                    <VBtn icon fab class="!p-0">
                        <img src="../../../public/images/avatar_1.png" />
                    </VBtn>
                    <VBtn icon fab class="!p-0">
                        <img src="../../../public/images/avatar_1.png" />
                    </VBtn>
                    <VBtn icon fab class="!p-0">
                        <img src="../../../public/images/avatar_1.png" />
                    </VBtn>
                </VContainer>
            </VContainer>
            <VContainer class="flex items-center justify-center">
                <VBtn no-ring rounded class="!bg-primary hover:!bg-primary/90  !text-white !px-20 !mt-10 !mx-auto"
                    @click="handleAction(mode)">
                    {{ mode === 'login' ? 'Login' : 'Register' }}
                </VBtn>
            </VContainer>
        </VContainer>
    </VContainer>
</template>

<script lang="ts">
import { ref } from 'vue';
import Api from '@/services/Api/Index';


const tab = ref([
    {
        text: 'Login',
    },
    {
        text: 'Register',
    },
]);

export default {
    name: 'LoginRegisterPage',
    data() {
        return {
            API: new Api(),
            tab,
            userModel: {
                username: '',
                password: ''
            }
        }
    },
    setup() {
        return {
            selectedTab: ref(0),
            username: ref(''),
            password: ref(''),
            mode: ref('login'),
            showPass: ref(false),
            verifPass: ref(''),
            showVerifPass: ref(false)
        }
    },
    methods: {
        login() {
            console.log('ini login')

            // this.userModel.username = this.username
            // this.userModel.password = this.password

            // this.API.post('endpoint', this.userModel, (status) => {
            //     if (status === 200) {
            //         console.log('login berhasil')
            //     } else {
            //         console.log('login error')
            //     }
            // })
        },
        register() {
            console.log('ini register')
        },
        handleAction(mode: string) {
            switch (mode) {
                case 'login':
                    this.login()
                    break
                case 'register':
                    this.register()
                    break
                default:
                    console.log('no action')
                    break
            }
        }
    },
    watch: {
        selectedTab() {
            switch (this.selectedTab) {
                case 1:
                    this.mode = 'register'
                    break
                default:
                    this.mode = 'login'
                    break
            }
        },
        showVerifPass() {
            console.log(this.showVerifPass)
        }
    }
}
</script>   