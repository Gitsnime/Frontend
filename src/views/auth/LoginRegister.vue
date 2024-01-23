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
            <form @submit.prevent="handleAction">
                <VInput rounded type="text" color="black" placeholder="Enter your Username" v-model="username"
                    label="Username" />
                <br />
                <div :class="mode === 'register' ? 'flex items-center w-full gap-5' : 'block'">
                    <div v-if="mode === 'register'" class="w-1/2">
                        <VInput rounded :type="showPass ? 'text' : 'password'" color="black"
                            placeholder="Enter your Password" v-model="password" label="Password"
                            :append-icon="showPass ? 'mdi:eye-outline' : 'mdi:eye-off'"
                            @clickAppend="() => { showPass = !showPass }" class="w-1/2" />
                    </div>
                    <div v-else class="w-full">
                        <VInput rounded :type="showPass ? 'text' : 'password'" color="black"
                            placeholder="Enter your Password" v-model="password" label="Password"
                            :append-icon="showPass ? 'mdi:eye-outline' : 'mdi:eye-off'"
                            @clickAppend="() => { showPass = !showPass }" class="w-1/2" />
                        <div class="mt-5">
                            <VCheckbox v-model="remember_me" label="Remember me" />
                        </div>
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
                        <VBtn icon fab class="!p-0" v-for="(profil, key) in pfp" :key="key" @click="setPfp(profil)">
                            <img :src="`http://localhost:8000/static${profil}`" />
                        </VBtn>
                    </VContainer>
                </VContainer>
                <VContainer class="flex items-center justify-center">
                    <VBtn no-ring rounded class="!bg-primary hover:!bg-primary/90  !text-white !px-20 !mt-10 !mx-auto"
                        type="submit">
                        {{ mode === 'login' ? 'Login' : 'Register' }}
                    </VBtn>
                </VContainer>
            </form>
        </VContainer>
    </VContainer>
</template>

<script lang="ts">
import { ref } from 'vue';
import Api from '@/services/Api/Index';
import { authStore } from '@/stores/Auth';


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
                password: '',
                password_match: '',
                profile_picture: ''
            },
            loginModel: {
                username: '',
                password: '',
            },
            remember_me: ref(false),
            loading: ref(false),
            pfp: []
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
            showVerifPass: ref(false),
            loading: ref(false)
        }
    },
    methods: {
        login() {
            this.loading = !this.loading

            this.loginModel.username = this.username;
            this.loginModel.password = this.password;

            const parrams = new URLSearchParams()
            parrams.append('remember_me', this.remember_me.toString())
            this.API.post(`auth/login?${parrams}`, this.loginModel, (status: number, data: any) => {
                if (status === 200) {
                    authStore().setToken(data.data.access_token);
                    this.clearData(this.loginModel)

                    if (authStore().getToken()) window.location.assign('/')
                    this.loading = !this.loading
                }
            });
        },
        register() {
            this.userModel.username = this.username
            this.userModel.password = this.password
            this.userModel.password_match = this.verifPass

            this.API.post('auth/register', this.userModel, (status: number) => {
                if (status === 200) {
                    console.log('berhasil')
                    this.clearData(this.userModel)
                }

            })
        },
        clearData(obj: any) {
            this.username = ''
            this.password = ''
            this.verifPass = ''

            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] === 'string') {
                        obj[key] = '';
                    } else if (typeof obj[key] === 'number') {
                        obj[key] = 0;
                    }
                }
            }
        },
        getPfp() {
            this.API.get('static/pfp/', (status: number, data: any) => {
                if (status === 200) {
                    this.pfp = data.data;
                } else {
                    console.log('Error:', status);
                }
            });

        },
        setPfp(pfp: string) {
            this.userModel.profile_picture = pfp
        },
        handleAction() {

            switch (this.mode) {
                case 'login':
                    this.login();
                    break;
                case 'register':
                    this.register();
                    break;
                default:
                    console.log('no action');
                    break;
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
    },
    created() {
        this.getPfp()
    }
}
</script>   